require('./settings')
const { default: walleConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const PhoneNumber = require('awesome-phonenumber')
const moment = require('moment-timezone')
const { Boom } = require('@hapi/boom')
const yargs = require('yargs/yargs')
const FileType = require('file-type')
const chalk = require('chalk')
const path = require('path')
const pino = require('pino')
const fs = require('fs')

//Low Db.
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')
}
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`src/database.json`)
)
global.db.data = {
users: {},
chats: {},
database: {},
game: {},
settings: {},
others: {},
sticker: {},
...(global.db.data || {})
}

//Guardar Base De Datos Cada 30 Seg.
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
}, 30 * 1000)

//Iniciar walle..js.
async function startwalle() {
const walle = walleConnect({
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: ['WalleBot - MD','Safari','1.0.0'],
auth: state
})

store.bind(walle.ev)

//Citado de invitaci??n a grupo.
const cinv = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "5521964527417-1482404133@g.us",
"inviteCode": `He9uYjcDsQPBYmlHmfdVpk`,
"groupName": `WalleBot - MD`, 
"caption":`Bienvenido(a)`, 
'jpegThumbnail': fs.readFileSync('./media/imagenes/walle.jpg')
}
}
}

//Antillamada 
walle.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
if (json.content[0].tag == 'offer') {
let wallefek = await walle.sendContact(callerId, global.owner)
walle.sendMessage(callerId, { text: `_Hey llamar al bot esta prohibido, lamentablemente seras bloqueado(a) si llamaste por error entonces comun??cate con mi desarrollador wa.me/5215621341581_`}, { quoted : wallefek })
await sleep(5000)
await walle.updateBlockStatus(callerId, "block")
}
})

walle.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!walle.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(walle, mek, store)
require("./walle")(walle, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

//Actualizaci??n De Grupo
walle.ev.on('groups.update', async pea => {
let lolWalle = fs.readFileSync('./media/imagenes/ajustes.png')
if (pea[0].announce == true) {
walle.send5ButImg(pea[0].id, `*??? <Ajustes De Grupo/>* ???*\n\n_??El grupo ha sido cerrado, ahora solo los administradores pueden enviar mensajes!_`, `${botname}`, lolWalle, [])
} else if (pea[0].announce == false) {
walle.send5ButImg(pea[0].id, `*??? <Ajustes De Grupo/> ???*\n\n_??El grupo ha sido abierto, ahora todos los participantes pueden enviar mensajes!_`, `${botname}`, lolWalle, [])
} else if (pea[0].restrict == true) {
walle.send5ButImg(pea[0].id, `*??? <Ajustes De Grupo/> ???*\n\n_??La edici??n de los ajustes del grupo ha sido cerrada, ahora solo los administradores pueden editar los ajustes del grupo!_`, `${botname}`, lolWalle, [])
} else if (pea[0].restrict == false) {
walle.send5ButImg(pea[0].id, `*??? <Ajustes De Grupo/> ???*\n\n_??La edici??n de los ajustes del grupo ha sido abierta, ahora todos los participantes pueden editar los ajustes del grupo!_`, `${botname}`, lolWalle, [])
} else {
walle.send5ButImg(pea[0].id, `*??? <Ajustes De Grupo/> ???*\n\n_El nombre del grupo ha sido cambiado a:_ *${pea[0].subject}*`, `${botname}`, lolWalle, [])
}
})

walle.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await walle.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await walle.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://i.ibb.co/5vGpn2V/images.png'
}
try {
ppgroup = await walle.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://i.ibb.co/5vGpn2V/images.png'
}

//Bienvenida
memb = metadata.participants.length
let nama = await walle.getName(num)
if (anu.action == 'add') {
const wallebuffer = await getBuffer(ppuser)
const xmembers = metadata.participants.length
const xtime = moment.tz('America/Mexico_City').format('HH:mm:ss')
const xdate = moment.tz('America/Mexico_City').format('DD/MM/YYYY')
let walleName = num
wallebody = `_Hola ????_ *@${walleName.split("@")[0]}*\n???? _Bienvenido(a) a:_ *_${metadata.subject}_*\n???? _Miembros:_ *_${xmembers}_*`
let buttons = [
{buttonId: `dbienvenido`, buttonText: {displayText: 'Bienvenido(a) ???????????'}, type: 1},
{buttonId: `getdesc`, buttonText: {displayText: 'Descripcion ????'}, type: 1}
]
let buttonMessage = {
image: wallebuffer,
mimetype: 'image/jpeg',
jpegThumbnail: fs.readFileSync('./media/imagenes/walle.jpg'),
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 99999999999999,
caption: wallebody,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${botname}`,
body: `${xtime} ${xdate}`,
mediaType:2,
thumbnail: fs.readFileSync('./media/imagenes/walle.jpg'),
sourceUrl: `https://chat.whatsapp.com/He9uYjcDsQPBYmlHmfdVpk`,
mediaUrl: ``
}}
}
walle.sendMessage(anu.id, buttonMessage, {quoted:cinv})
} else if (anu.action == 'remove') {
const wallebuffer = await getBuffer(ppuser)
const walletime = moment.tz('America/Mexico_City').format('HH:mm:ss')
const walledate = moment.tz('America/Mexico_City').format('DD/MM/YYYY')
let walleName = num
const wallemembers = metadata.participants.length
wallebody = `_Adios_ *@${walleName.split("@")[0]}* ????\n\n_Que cada dia de tu vida sea un infierno para ti_ :)`
let buttons = [
{buttonId: `adiosaudio`, buttonText: {displayText: 'Ojala Se Muera ??????'}, type: 1}
]
let buttonMessage = {
image: wallebuffer,
mimetype: 'image/jpeg',
jpegThumbnail: fs.readFileSync('./media/imagenes/walle.jpg'),
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 99999999999999,
caption: wallebody,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${botname}`,
body: `${walletime} ${walledate}`,
mediaType:2,
thumbnail: fs.readFileSync('./media/imagenes/walle.jpg'),
sourceUrl: `https://chat.whatsapp.com/He9uYjcDsQPBYmlHmfdVpk`,
mediaUrl: ``
}}
}
walle.sendMessage(anu.id, buttonMessage, {quoted:cinv})
}
}
} catch (err) {
console.log(err)
}
})

//Ajustes
walle.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

walle.ev.on('contacts.update', update => {
for (let contact of update) {
let id = walle.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

walle.getName = (jid, withoutContact  = false) => {
id = walle.decodeJid(jid)
withoutContact = walle.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = walle.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === walle.decodeJid(walle.user.id) ?
walle.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

walle.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await walle.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await walle.getName(i + '@s.whatsapp.net')}\nFN:${global.ownername}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Haz Click Para Chatear\nitem2.EMAIL;type=INTERNET:${global.ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${global.socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}
walle.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
}

walle.setStatus = (status) => {
walle.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

walle.public = true

walle.serializeM = (m) => smsg(walle, m, store)

walle.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update	    
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); walle.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startwalle(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startwalle(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); walle.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); walle.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startwalle(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startwalle(); }
else walle.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
console.log('Connected...', update)
})

walle.ev.on('creds.update', saveState)


walle.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ image: img }, { upload: walle.waUploadToServer })
var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
walle.relayMessage(jid, template.message, { messageId: template.key.id })
}

walle.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
walle.sendMessage(jid, buttonMessage, { quoted, ...options })
}

walle.sendText = (jid, text, quoted = '', options) => walle.sendMessage(jid, { text: text, ...options }, { quoted })

walle.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await walle.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

walle.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await walle.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
}

walle.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await walle.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
}

walle.sendTextWithMentions = async (jid, text, quoted, options = {}) => walle.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

walle.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}

await walle.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

walle.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}

await walle.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

walle.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename

//Guardar Archivo.
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

walle.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}

return buffer
} 

walle.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await walle.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'
}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await walle.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)
}

walle.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}

let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await walle.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

walle.cMod = (jid, copy, text = '', sender = walle.user.id, options = {}) => {

let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options
}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === walle.user.id

return proto.WebMessageInfo.fromObject(copy)
}

walle.send5ButImg = async (jid , text = '' , footer = '', img, but = [], thumb, options = {}) =>{
let message = await prepareWAMessageMedia({ image: img, jpegThumbnail:thumb }, { upload: walle.waUploadToServer })
var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
walle.relayMessage(jid, template.message, { messageId: template.key.id })
}

walle.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: vid }, { upload: walle.waUploadToServer })
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
walle.relayMessage(jid, template.message, { messageId: template.key.id })
}

walle.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
let templateButtons = but
var templateMessage = {
text: text,
footer: footer,
templateButtons: templateButtons
}
walle.sendMessage(jid, templateMessage)
}

walle.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
let sections = sects
var listMes = {
text: text,
footer: footer,
title: title,
buttonText: butText,
sections
}
walle.sendMessage(jid, listMes, { quoted: quoted })
}

walle.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: walle.waUploadToServer })
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
walle.relayMessage(jid, template.message, { messageId: template.key.id })
}

walle.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data
}

}

return walle
}

startwalle()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.greenBright(`=> ${__filename} Actualizado.`))
delete require.cache[file]
require(file)
})