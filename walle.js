require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const { smsg, supre, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { exec, spawn, execSync } = require("child_process")
const { mediafireDl } = require('./lib/mediafire.js')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { pinterest } = require("./lib/pinterest")
const { hentai } = require('./lib/scraper2.js')
const { EmojiAPI } = require("emoji-api")
const { JSDOM } = require('jsdom')
const toHur = require('@develoka/angka-terbilang-js')
const moment = require('moment-timezone')
const thiccysapi = require('textmaker-thiccy')
const speed = require('performance-now')
const textpro = require('./lib/textpro')
const wallekey = require('xfarr-api')
const fetch = require('node-fetch')
const maker = require('mumaker')
const cheerio = require ("cheerio")
const axios = require('axios')
const chalk = require('chalk')
const hx = require("hxz-api")
const path = require('path')
const util = require('util')
const os = require('os')
const fs = require('fs')
const primbon = new Primbon()
const emoji = new EmojiAPI()

//Src Jsons.
let vote = db.data.others.vote = []
let banneduser = JSON.parse(fs.readFileSync('./src/banneduser.json'));
let bannedgroup = JSON.parse(fs.readFileSync('./src/bannedgroup.json'));
let autosticker = JSON.parse(fs.readFileSync('./src/autosticker.json'));
let antiarabes = JSON.parse(fs.readFileSync('./src/antiarabes.json'))
let antinsfw = JSON.parse(fs.readFileSync('./src/antinsfw.json'))
let antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
let antilinkgp = JSON.parse(fs.readFileSync('./src/antilinkgp.json'))
let antijuegos = JSON.parse(fs.readFileSync('./src/antijuegos.json'))

module.exports = walle = async (walle, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?/#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?/#$%^&.©^]/gi)[0] : "!" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "¡Sin nombre!"
const botNumber = await walle.decodeJid(walle.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = [botNumber, ...global.premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]        
const content = JSON.stringify(mek.message)
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()

//Grupo.
const groupMetadata = m.isGroup ? await walle.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? antilinkgp.includes(from) : false
const AntiLinkAll = m.isGroup ? antilink.includes(from) : false
const AntiNsfw = m.isGroup ? antinsfw.includes(from) : false
const AntiJuegos = m.isGroup ? antijuegos.includes(from) : false
const AntiArabes = m.isGroup ? antiarabes.includes(from) : false
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const isBannedUser = banneduser.includes(m.sender)
const isBannedGroup = m.isGroup ? bannedgroup.includes(from) : true
autoreadsw = true

//Zenz Api's.
let appi = [key1,key2,key3,key4,key5,key6]
let zenapi = appi[Math.floor(Math.random() * appi.length)]

//Nxr Api's.
let appin = [key7,key8,key9]
let nxrapi = appin[Math.floor(Math.random() * appin.length)]

//Imagen Menú.
let picaks = [walle,walle2,walle3,walle4,walle5]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

//Beso Gif.
let besop = [beso,beso2,beso3,beso4,beso5]
let besito = besop[Math.floor(Math.random() * besop.length)]

//Patada Gif.
let patadap = [patada,patada2,patada3,patada4,patada5]
let patadita = patadap[Math.floor(Math.random() * patadap.length)]

//Imagen.
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

//Documento.
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

//Actualización De Grupo
walle.ev.on('groups.update', async pea => {
let lolWalle = fs.readFileSync('./media/imagenes/ajustes.png')
if (pea[0].announce == true) {
walle.send5ButImg(pea[0].id, `*「 <Ajustes De Grupo/>* 」*\n\n_¡El grupo ha sido cerrado, ahora solo los administradores pueden enviar mensajes!_`, `${botname}`, lolWalle, [])
} else if (pea[0].announce == false) {
walle.send5ButImg(pea[0].id, `*「 <Ajustes De Grupo/> 」*\n\n_¡El grupo ha sido abierto, ahora todos los participantes pueden enviar mensajes!_`, `${botname}`, lolWalle, [])
} else if (pea[0].restrict == true) {
walle.send5ButImg(pea[0].id, `*「 <Ajustes De Grupo/> 」*\n\n_¡La edición de los ajustes del grupo ha sido cerrada, ahora solo los administradores pueden editar los ajustes del grupo!_`, `${botname}`, lolWalle, [])
} else if (pea[0].restrict == false) {
walle.send5ButImg(pea[0].id, `*「 <Ajustes De Grupo/> 」*\n\n_¡La edición de los ajustes del grupo ha sido abierta, ahora todos los participantes pueden editar los ajustes del grupo!_`, `${botname}`, lolWalle, [])
} else {
walle.send5ButImg(pea[0].id, `*「 <Ajustes De Grupo/> 」*\n\n_El nombre del grupo ha sido cambiado a:_ *${pea[0].subject}*`, `${botname}`, lolWalle, [])
}
})

//Afk Sistema.
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
} else global.db.data.chats[m.chat] = {
mute: false,
}

//Ajustes Template.
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = true
if (!('templateImage' in setting)) setting.templateImage = true
if (!('templateVideo' in setting)) setting.templateVideo = false
if (!('templateGif' in setting)) setting.templateGif = false
if (!('templateMsg' in setting)) setting.templateMsg = false
if (!('templateDocument' in setting)) setting.templateDocument = false
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: true,
templateImage: true,
templateVideo: false,
templateGif: false,
templateMsg: false,
templateDocument: false,
}

} catch (err) {
console.error(err)
}

//Tiempo.
const dfrply = fs.readFileSync('./media/imagenes/walle.jpg')
const thubb = fs.readFileSync('./media/imagenes/walle.jpg')
const sekarang2 = new Date().getTime();
var ase = new Date();
var jamss = ase.getHours();
switch(jamss){
case 0: jamss = "🌖 ¡Buenas Noches!"; break;
case 1: jamss = "🌖 ¡Buenas Noches!"; break;
case 2: jamss = "🌖 ¡Buenas Noches!"; break;
case 3: jamss = "🌖 ¡Buenas Noches!"; break;
case 4: jamss = "🌖 ¡Buenas Noches!"; break;
case 5: jamss = "☀️ ¡Buenos Dias!"; break;
case 6: jamss = "☀️ ¡Buenos Dias!"; break;
case 7: jamss = "☀️ ¡Buenos Dias!"; break;
case 8: jamss = "☀️ ¡Buenos Dias!"; break;
case 9: jamss = "☀️ ¡Buenos Dias!"; break;
case 10: jamss = "☀️ ¡Buenos Dias!"; break;
case 11: jamss = "🌤️ ¡Buenas Tardes!"; break;
case 12: jamss = "🌤️ ¡Buenas Tardes!"; break;
case 13: jamss = "🌤️ ¡Buenas Tardes!"; break;
case 14: jamss = "🌤️ ¡Buenas Tardes!"; break;
case 15: jamss = "🌤️ ¡Buenas Tardes!"; break;
case 16: jamss = "🌤️ ¡Buenas Tardes!"; break;
case 17: jamss = "🌖 ¡Buenas Noches!"; break;
case 18: jamss = "🌖 ¡Buenas Noches!"; break;
case 19: jamss = "🌖 ¡Buenas Noches!"; break;
case 20: jamss = "🌖 ¡Buenas Noches!"; break;
case 21: jamss = "🌖 ¡Buenas Noches!"; break;
case 22: jamss = "🌖 ¡Buenas Noches!"; break;
case 23: jamss = "🌖 ¡Buenas Noches!"; break;
}
var tampilUcapan = "" + jamss;
const jmn = moment.tz('America/Mexico_City').format('HH:mm:ss')
const xtime = moment.tz('America/Mexico_City').format('HH:mm:ss')
const xdate = moment.tz('America/Mexico_City').format('DD/MM/YYYY')
let d = new Date
let locale = 'es'
let gmt = new Date(0).getTime() - new Date('1 enero 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'numeric',
year: 'numeric'
})		      	       


//Citado de imagen.
const textImg = (teks) => {
walle.sendMessage(m.chat, { text :teks, }, {quoted: cpubli, thumbnail: fs.readFileSync('./media/imagenes/walle.jpg')}) 
}

//Citado de contacto.
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `916909137213 -1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click para chatear\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}

//Citado de orden.
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid })
walle.relayMessage(jid, order.message, { messageId: order.key.id})
}

//Citado de producto.
const cproduc = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": thumb
},
"title": `${global.ownername}`, 
"description": `${global.botname}`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `${global.botname}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
} 

//Citado de publicidad.
const cpubli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: `${xtime} ${xdate}`, //
orderTitle: `${global.botname}`,
thumbnail: thumb, //Pic
sellerJid: '0@s.whatsapp.net'

}
}
}

//Citado de localización.
const cloca = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `${global.location}`,
jpegThumbnail: thumb
}
}
}

//Citado de documentos.
const cdoc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${global.botname}`, 
jpegThumbnail: thumb
}
}
}

//Citado de video.
const cvid = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${global.botname}`,
"h": `${global.ownername}`,
'seconds': '30', 
'caption': `${global.botname}`,
'jpegThumbnail': thumb
}
}
}

//Citado de invitación a grupo.
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
"groupName": `${groupName}`, 
"caption":`${pushname}`, 
'jpegThumbnail': thumb
}
}
}

//Citado de gif.
const cgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title":`${global.botname}`,
"h": `${global.ownername}`,
'seconds': "30", 
'gifPlayback': 'true', 
'caption': `${global.botname}`,
'jpegThumbnail': thumb
}
}
} 

//Citado de texto en foto.
const ctf = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
"text":`${global.ownername}`,
"title": `${global.botname}`,
'jpegThumbnail': thumb
}
} 
}

//Citado de vn.
const cvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}

walle.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await walle.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await walle.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://i.ibb.co/0V2NL4z/1-709-996-2061-20220728-223118.jpg'
}
try {
ppgroup = await walle.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://i.ibb.co/0V2NL4z/1-709-996-2061-20220728-223118.jpg'
}

//Bienvenida
memb = metadata.participants.length
let nama = await walle.getName(num)
if (anu.action == 'add') {
const wallebuffer = await getBuffer(ppuser)
const xmembers = metadata.participants.length
let walleName = num
wallebody = `_Hola 👋_ *@${walleName.split("@")[0]}*\n🔰 _Bienvenido(a) a:_ *_${metadata.subject}_*\n👤 _Miembros:_ *_${xmembers}_*`
let buttons = [
{buttonId: `dbienvenido`, buttonText: {displayText: 'Bienvenido(a) 💃🏿️'}, type: 1},
{buttonId: `getdesc`, buttonText: {displayText: 'Descripcion 📋'}, type: 1}
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
wallebody = `_Adios_ *@${walleName.split("@")[0]}* 👋\n\n_Que cada dia de tu vida sea un infierno para ti_ :)`
let buttons = [
{buttonId: `adiosaudio`, buttonText: {displayText: 'Ojala Se Muera ⚰️'}, type: 1}
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

//Reply.
const reply = (teks) => {
walle.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `Solicitud: ${prefix + command}`,"body": `${global.botname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/imagenes/walle.jpg`),"sourceUrl": `https://chat.whatsapp.com/He9uYjcDsQPBYmlHmfdVpk`}}}, { quoted: cinv})
}

//Publico & Privado.
if (!walle.public) {
if (!m.key.fromMe) return
}

//Logs de mensajes recibidos.
if (m.message) {
console.log(chalk.black(chalk.bgRed('[ MENSAJE ]')), chalk.black(chalk.bgYellow(new Date)), chalk.black(chalk.bgGreen(budy || m.mtype)) + '\n' + chalk.red('=> De'), chalk.green(pushname), chalk.white(m.sender) + '\n' + chalk.red('=> En'), chalk.white(m.isGroup ? pushname : 'Chat privado', m.chat))
}

//Autobiografía.
if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let timestamp = speed()
let latensi = speed() - timestamp
let uptime = await runtime(process.uptime())
await walle.setStatus(`WalleBot - MD | ¡Tiempo en servicio: ${runtime(process.uptime())}!`)
setting.status = new Date() * 1
}
}

//Auto ver estados.
if (autoreadsw) {
if (from === 'status@broadcast') {
walle.chatRead(from)
}
}

//Auto leer grupos & chats 
if (global.autoreadpmngc) {
if (command) {
await walle.sendPresenceUpdate('composing', m.chat)
walle.sendReadReceipt(from, m.sender, [m.key.id])}
}

//Auto leer grupos.
if (global.autoReadGc) {
if (m.isGroup) { walle.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}

//Auto grabar audio chats & grupos.
if (global.autoRecord) { if (m.chat) { walle.sendPresenceUpdate('recording', m.chat) }
}

//Autoescribir grupos & chats.
if (global.autoTyping) { if (m.chat) { walle.sendPresenceUpdate('composing', m.chat) }
}

//Auto disponible grupos & chats.
if (global.available) { if (m.chat) { walle.sendPresenceUpdate('available', m.chat) }
}

//Autosticker grupos.
if (isAutoSticker) {
if (/image/.test(mime) && !/webp/.test(mime)) {
let mediac = await quoted.download()
await walle.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
console.log(`¡Auto stickers detectado!`)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return
let mediac = await quoted.download()
await walle.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
}
}

//Anti link grupos.
if (AntiLink) {
linkgce = await walle.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
reply(`*「 <Enlace No Permitido/> 」*\n\n_¡El participante no sera removido debido a que el link pertenece a este grupo!_`)
} else if (isUrl(m.text)) {
bvl = `*「 <Enlace No Permitido/> 」*\n\n_¡El participante no sera removido debido a que es administrador del grupo!_`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await walle.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
walle.sendMessage(from, {text:`*「 <Enlace No Permitido/> 」*\n\n*@${kice.split("@")[0]}* _¡Ha sido removido del grupo debido a que envio un enlace no permitido!_`, contextInfo:{mentionedJid:[kice]}}, {quoted:cpubli})
} else {
}
}

/*//Antilink.
if (AntiLinkAll) {
if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `*「 <Enlace No Permitido/> 」*\n\n_¡El participante no sera removido debido a que es administrador del grupo!_`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await walle.groupParticipantsUpdate(m.chat, [kice], 'remove')
walle.sendMessage(from, {text:`*「 <Enlace No Permitido/> 」*\n\n*@${kice.split("@")[0]}* _¡Ha sido removido del grupo debido a que envio un enlace no permitido!_`, contextInfo:{mentionedJid:[kice]}}, {quoted:cpubli})
} else {
}
}*/

//Emojis.
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "su", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "¡Aquí tienes!",footerText: `${botname}`,buttons: buttons,headerType: 4}
walle.sendMessage(from, buttonMessage, {quoted:cpubli})
})
} catch (e) {
reply("_¡Error, ingresa otro emoji, solo ingresa 1 emoji!_")
}
}

//Mutear grupos.
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}

//Detectar multimedia.
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

//Responder comandos a multimedia.
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: walle.user.id,
quoted: cpubli.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, walle.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
walle.ev.emit('messages.upsert', msg)
}

//Xo Juego.
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'JUGANDO')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { 
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
reply({
'-3': '¡El juego ha terminado!',
'-2': '¡Invalido!',
'-1': '¡Posición invalida!',
0: '¡Posición invalida!',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Sala ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} ¡Gano!` : isTie ? `Juego terminado.` : `Turno ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Escribe *surrender* para rendirte y admitir tu derrota.`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await walle.sendText(room.x, str, m, { mentions: parseMention(str) } )
await walle.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`
¡No lo(a) menciones!
El/Ella esta fuera de linea razón ${reason ? 'Razon: ' + reason : 'Sin razon'}
Tiempo fuera de linea: ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
¡Haz vuelto!${user.afkReason ? ' Despues de: ' + user.afkReason : ''}
En: ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

//Reaccion.
const reactionMessage = {
react: {
text: args[0],
key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
}
}

//Menu texto.
const timestampe = speed();
const latensie = speed() - timestampe
const menulist = `_Hola 👋_ *${pushname}*
_${tampilUcapan} sea bienvenido(a) al menu de inicio, porfavor elige alguna opción. 🫠_

_🚀 El universo tiene un inicio, pero no un fin. infinito. Las estrellas igualmente tienen su incio, pero su propio poder & energía las lleva a su destrucción._

_Hey ¿Tienes algun problema o queja con el bot? hazmelo saber usando el comando ${prefix}reporte + el problema o ¿tienes alguna petición? hazmelo saber usando ${prefix}peticion + tu petición 📝_

🍟 *Nombre Del Bot:* _${global.botname}_
🍟 *Creador:* _${global.ownername}_
🍟 *Contacto Creador:* _${global.owner}_
🍟 *Lenguaje:* _Javascript_
🍟 *Motor:* _Node.JS v17.3.0_
🍟 *Libreria:* _Baileys MD (Multidevice)_
🍟 *Velocidad De Respuesta:* _${latensie.toFixed(4)} Milisegundos_
🍟 *Tiempo En Servicio:* _${runtime(process.uptime())}_

*Agradecimientos*
- _Khalov_
- _Tadashi_
- _adiwajshing_`

const allmenulist = `❲ ＷＡＬＬＥ - ＢＯＴ ❳

_Hola ✋_ *${pushname}*

_Bienvenido(a) todos los comandos de *WalleBot* pueden usarse totalmente sin limite ツ_
 
 *ꪶ CREADOR ꫂ*
 
  ✘ _${prefix}conversar_
  ✘ _${prefix}biografía_
  ✘ _${prefix}obtenercase_
  ✘ _${prefix}cambiartema_
  ✘ _${prefix}autoverestados_ 
  ✘ _${prefix}salir_
  ✘ _${prefix}fotobot_
  ✘ _${prefix}salir_
  ✘ _${prefix}privado_
  ✘ _${prefix}publico_
  ✘ _${prefix}banearusuario_
  ✘ _${prefix}baneargrupo_
  ✘ _${prefix}bloquear_
  ✘ _${prefix}desbloquear_
  ✘ _${prefix}avisochats_
  ✘ _${prefix}avisogrupos_
  
 *ꪶ PREMIUM ꫂ*
 
  ✘ _${prefix}gore_
  ✘ _${prefix}tiktokporn_
  ✘ _${prefix}unirse_
  ✘ _${prefix}playxnxx_
  ✘ _${prefix}playxvideos_
  ✘ _${prefix}xnxxdl_
  ✘ _${prefix}xvideosdl_
  ✘ _${prefix}hbocuenta_
  
 *ꪶ GRUPO ꫂ*

  ✘ _${prefix}nombregp_
  ✘ _${prefix}descgp_
  ✘ _${prefix}fotogp_
  ✘ _${prefix}grupo_
  ✘ _${prefix}editargp_
  ✘ _${prefix}enlacegp_
  ✘ _${prefix}resetearenlace_
  ✘ _${prefix}promover_
  ✘ _${prefix}degradar_
  ✘ _${prefix}ban_
  ✘ _${prefix}afk_
  ✘ _${prefix}tagall_
  ✘ _${prefix}hidetag_
  ✘ _${prefix}nsfw_
  ✘ _${prefix}juegos_
  ✘ _${prefix}antiarabes_
  ✘ _${prefix}antilink_
  ✘ _${prefix}antilinkgp_
  ✘ _${prefix}autosticker_

 *ꪶ BUSQUEDA & DESCARGA ꫂ*
 
  ✘ _${prefix}play_
  ✘ _${prefix}tiktok_
  ✘ _${prefix}mediadire_
  ✘ _${prefix}githubstalk_
  ✘ _${prefix}tiktokstalk_
  ✘ _${prefix}instagramstalk_
  ✘ _${prefix}covid_
  ✘ _${prefix}gitclone_
  ✘ _${prefix}lyrics_
  ✘ _${prefix}ggimagen_
  ✘ _${prefix}pinterest_
  ✘ _${prefix}pelicula_
  ✘ _${prefix}buscargps_
  ✘ _${prefix}tono_
  ✘ _${prefix}wattpad_
   
 *ꪶ STICKERS️ ꫂ*
 
  ✘ _${prefix}attp_
  ✘ _${prefix}attp2_
  ✘ _${prefix}ttp_
  ✘ _${prefix}sticker_
  ✘ _${prefix}stickerp_ 
  ✘ _${prefix}emoji_
  ✘ _${prefix}smeme_
  ✘ _${prefix}emojimix_
  
 *ꪶ MENU RANDOM ꫂ*
 
  ✘ _${prefix}arigameplays_
  ✘ _${prefix}chicas_
  ✘ _${prefix}michis_
  ✘ _${prefix}perrito_
  ✘ _${prefix}michi_
  ✘ _${prefix}pandita_
  ✘ _${prefix}zorrito_
  ✘ _${prefix}panditarojo_
  ✘ _${prefix}koalita_
  ✘ _${prefix}pajarito_
  ✘ _${prefix}cafe_
  ✘ _${prefix}muslos_
  ✘ _${prefix}editanime_ 
  
 *ꪶ HERRAMIENTAS ꫂ*
 
  ✘ _${prefix}fotoweb_ 
  ✘ _${prefix}fotowebcel_ 
  ✘ _${prefix}gtts_ 
  ✘ _${prefix}encuesta_ 
  ✘ _${prefix}listachats_ 
  ✘ _${prefix}listagrupos_ 
  ✘ _${prefix}volteartexto_ 
  ✘ _${prefix}petición_ 
  ✘ _${prefix}reporte_ 
  ✘ _${prefix}mensajeinfo_ 
  ✘ _${prefix}desarollador_ 
 
 *ꪶ CONVERTIDORES ꫂ*
 
  ✘ _${prefix}toimg_
  ✘ _${prefix}tomp4_
  ✘ _${prefix}tourl_
  ✘ _${prefix}togif_
  ✘ _${prefix}tomp3_
  ✘ _${prefix}volumen_
  ✘ _${prefix}duración_
  ✘ _${prefix}bass_ 
  ✘ _${prefix}blown_ 
  ✘ _${prefix}deep_
  ✘ _${prefix}earrape_
  ✘ _${prefix}fast_
  ✘ _${prefix}reverse_
  ✘ _${prefix}robot_
  ✘ _${prefix}slow_
  ✘ _${prefix}smooth_
  
 *ꪶ JUEGOS ꫂ*

  ✘ _${prefix}mivirtual_ 
  ✘ _${prefix}virtuales_
  ✘ _${prefix}fotospareja_ 
  ✘ _${prefix}mimuerte_
  ✘ _${prefix}tweetfalso_
  ✘ _${prefix}phc_
  ✘ _${prefix}topgays_
  ✘ _${prefix}gay_
  ✘ _${prefix}besar_
  ✘ _${prefix}golpear_
  ✘ _${prefix}matar_
  ✘ _${prefix}nalgear_
  ✘ _${prefix}cartel_
  ✘ _${prefix}gtavmuerto_
  ✘ _${prefix}gtavmision_
  ✘ _${prefix}encarcelado_
  ✘ _${prefix}sepia_
  ✘ _${prefix}borroso_
  ✘ _${prefix}hornylc_
  ✘ _${prefix}apuntando_
  ✘ _${prefix}xo_
  
 *ꪶ LOGOS ꫂ*
 
  ✘ _${prefix}ffbanner_ 
  ✘ _${prefix}cat_
  ✘ _${prefix}blackpink_
  ✘ _${prefix}batman_
  ✘ _${prefix}thunder_
  ✘ _${prefix}harrypotter_
  ✘ _${prefix}underwater_
  ✘ _${prefix}neon_
  ✘ _${prefix}vintage_
  ✘ _${prefix}firework_
  ✘ _${prefix}dropwater_
  ✘ _${prefix}3d_
  ✘ _${prefix}glitch_
  ✘ _${prefix}tiktokstyle_
  ✘ _${prefix}pornhub_
  ✘ _${prefix}avengers_
  ✘ _${prefix}marvel_
  
  *ꪶ ANIME ꫂ*
 
  ✘ _${prefix}animecuddle_
  ✘ _${prefix}animeslap_
  ✘ _${prefix}animepat_
  ✘ _${prefix}animeneko_
  ✘ _${prefix}animehug_
  ✘ _${prefix}animekiss_
  ✘ _${prefix}animewlp_
  ✘ _${prefix}animespank_
  ✘ _${prefix}shinobu2_
  ✘ _${prefix}megumin2_
  ✘ _${prefix}awoo2_
  ✘ _${prefix}animewall2_
  ✘ _${prefix}editanime_
  ✘ _${prefix}tiro_
  ✘ _${prefix}shota_
  ✘ _${prefix}loli_

 *ꪶ NSFW ꫂ*

  ✘ _${prefix}masturbation_
  ✘ _${prefix}jahy_
  ✘ _${prefix}hentai_
  ✘ _${prefix}glasses_
  ✘ _${prefix}gangbang_
  ✘ _${prefix}foot_
  ✘ _${prefix}femdom_
  ✘ _${prefix}cum_
  ✘ _${prefix}ero_
  ✘ _${prefix}cuckold_
  ✘ _${prefix}blowjob_
  ✘ _${prefix}bdsm_
  ✘ _${prefix}ahegao_
  ✘ _${prefix}ass_
  ✘ _${prefix}orgy_
  ✘ _${prefix}panties_
  ✘ _${prefix}pussy_
  ✘ _${prefix}thigs_
  ✘ _${prefix}yuri_
  ✘ _${prefix}tentacles_`


//Inicio de comandos.
switch(command) {
//Menu Creador 👤
case 'conversar':
case 'chat': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!isCreator) return reply(answer.owner)
if (!args.join(" ")) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} 525621xxxxxx|Hola”_*`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*「 <Conversación/> 」*

Mensaje del propietario del bot
Numero : @${m.sender.split("@")[0]}
Mensaje : ${pesny}`
walle.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:cpubli})
}
await reply("_Solicitud realizada con éxito._")
break

case 'biografia':
case 'setbio':
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!q) return reply('_Ejemplo de uso:_ *_‟/biografia ola”_*')
walle.setStatus(`${q}`)
reply(answer.success)
break

case 'getcase':
case 'obtenercase':
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!isCreator) return
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("walle.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
reply(`${getCase(q)}`)
break

case 'cambiartema':
case 'establecermenu': {
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!isCreator) return reply(answer.owner)
let setbot = db.data.settings[botNumber]
if (args[0] === 'templateImage'){
setbot.templateImage = true
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateDocument = false
reply(answer.success)
} else if (args[0] === 'templateGif'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = true
setbot.templateMsg = false
setbot.templateDocument = false
reply(answer.success)
} else if (args[0] === 'templateVideo'){
setbot.templateImage = false
setbot.templateVideo = true
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateDocument = false
reply(answer.success)
} else if (args[0] === 'templateMessage'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = true
setbot.templateDocument = false
reply(answer.success)
} else if (args[0] === 'templateDocument'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateDocument = true
reply('_¡Ok, tema cambiado con éxito!_')
} else {
let sections = [
{
title: "Alterar Menu",
rows: [
{title: "Menu - Imagen", rowId: `cambiartema templateImage`, description: `‟Haga click aqui para establecer Imagen como menu.”`},
{title: "Menu - Video", rowId: `cambiartema templateVideo`, description: `‟Haga click aqui para establecer Video como menu.”`},
{title: "Menu - Gif", rowId: `cambiartema templateGif`, description: `‟Haga click aqui para establecer Gif como menu.”`},
{title: "Menu - Texto", rowId: `cambiartema templateMessage`, description: `‟Haga click aqui para establecer Texto como menu.”`},
{title: "Menu - Documento", rowId: `cambiartema templateDocument`, description: `‟Haga click aqui para establecer Documento como menu.”`}
]
},
]
walle.sendListMsg(m.chat, `_Por favor eliga algun tema de menu._`, ` `, walle.user.name, `Haga Click Aqui`, sections, cpubli)
}
}
break

case 'autoviewstatus': 
case 'autoverestados':
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!isCreator) return
if (args[0] == 'activar') {
if (autoreadsw) return reply('_¡Ya esta activado!_')
autoreadsw = true
reply('_Ok, ahora WalleBot autovera los estados de los contactos registrados._')
} else if (args[0] == 'desactivar') {
if (!autoreadsw) return reply('_¡Ya esta desactivado!_')
autoreadsw = false
reply('_Ok, se dejaran de autover los estados de los contactos registrados._')
} else {
reply(`_Use_ *_‟${prefix + command} activar“_* _para activar &_ *_‟${prefix + command} desactivar“_* _para desactivar_`)
}
break

case 'picbot':
case 'fotobot': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!isCreator) return reply(answer.owner)
if (!quoted) return reply(`_Envie o responde a una imagen con el comando_ *_‟${prefix + command}”_*`)
if (!/image/.test(mime)) return reply(`_Envie o responde a una imagen con el comando_ *_‟${prefix + command}”_*`)
if (/webp/.test(mime)) return reply(`_Envie o responde a una imagen con el comando_ *_‟${prefix + command}”_*`)
let media = await walle.downloadAndSaveMediaMessage(quoted)
await walle.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
reply(answer.success)
}
break

case 'exit': 
case 'salir': {
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!isCreator) return reply(answer.owner)
reply('_Ok, saliendo del grupo. ;(_')
await sleep(1500)
await walle.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'self':
case 'privado': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!isCreator) return reply(answer.owner)
walle.public = false
reply('_Ok, el modo de WalleBot se ha establecido a privado._')
walle.setStatus(`Modo: Privado`)
}
break

case 'antitag':
case 'antimencion': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!isCreator) return
if (args.length < 1) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} activar”_* _para activar &_ *_‟${prefix + command} desactivar”_* _para desactivar_`)
if (args[0] === 'activar') {
if (antitags === true) return
global.antitags = true
reply(`_¡Antimencion se ha activado con éxito!_`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
reply(`_¡Antimencion se ha desactivado con éxito!_`)
} else {
reply(`_Use_ *_‟${prefix + command} activar”_* _para activar &_ *_‟${prefix + command} desactivar”_* _para desactivar_`)
}
}
break

case 'baneargrupo':
case 'baneargp': {
if (isBannedUser) return reply(answer.banneduser) 
if (!isCreator) return reply(mess.owner)
if (args[0] === "banear") {
if (isBannnedGroup) return reply('_Este grupo ya esta baneado._')
bannedgroup.push(from)
reply('_¡El grupo ha sido baneado con exito!_')
var groupe = await walle.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
walle.sendMessage(from, {text: `*「 <AVISO️/> 」*\n\n_WalleBot ha sido baneado de este grupo, ahora no se responderan comandos emitidos por este grupo._`, contextInfo: { mentionedJid : mems }}, {quoted:cpubli})
} else if (args[0] === "desbanear") {
if (!isBannedGroup) return reply('_¡Este grupo no esta baneado!_')
let off = bannedgroup.indexOf(from)
bannedgroup.splice(off, 1)
replay('_¡El grupo ha sido desbaneado con exito, ahora se escucharan las peticiones emitidas por este grupo!_')
} else {
let buttonsntnsfw = [
{ buttonId: `${prefix + command} banear`, buttonText: { displayText: 'Banear ✳️' }, type: 1 },
{ buttonId: `${prefix + command} debanear`, buttonText: { displayText: 'Desbanear ❌' }, type: 1 }
]
await walle.sendButtonText(m.chat, buttonsntnsfw, `_Porfavor elige una opcion._`, `${global.botname}`, cpubli)
}
}
break

case 'banusuario':
case 'vetar':
case 'banear': {
if (isBannedGroup) return reply(answer.bannedgroup)
if (!isCreator) return reply(answer.owner)
if (!args[0]) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} añadir 5215621341581“_* _para banear &_ *_‟${prefix + command} desbanear 5215621341581“_* _para desbanear_`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBannedUser = banneduser.includes(orgnye)
if (args[0] === "añadir") {
if (isBannedUser) return ads('_¡El usuario ya ha sido baneado!_')
banneduser.push(orgnye)
reply(`_¡El usuario ha sido baneado con exito, ahora no podra utilizar los comandos de *WalleBot*!_`)
} else if (args[0] === "desbanear") {
if (!isBannedUser) return reply('_¡Este usuario no esta baneado!_')
let delbans = banneduser.indexOf(orgnye)
banneduser.splice(delbans, 1)
reply(`_¡El usuario ha sido desbaneado con exito, ahora podra utilizar los comandos de *WalleBot*!_`)
} else {
reply("_¡Upps! Ha ocurrido un error talvez no escribiste bien el comando.*")
}
}
break

case 'block':
case 'bloquear': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!isCreator) return reply(answer.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await walle.updateBlockStatus(users, 'block').then((res) => reply('_¡El usuario ha sido bloqueado con exito!_')).catch((err) => reply(jsonformat(err)))
}
break

case 'unblock':
case 'desbloquear': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!isCreator) return reply(answer.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await walle.updateBlockStatus(users, 'unblock').then((res) => reply('_¡El usuario ha sido desbloqueado con exito!_')).catch((err) => reply(jsonformat(err)))
}
break


case 'avisochats': 
case 'warningchats': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!isCreator) return reply(answer.owner)
if (!m.isGroup) return reply(answer.group) 
if (!args.join(" ")) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Ola :3“_*`)
let anu = await store.chats.all().map(v => v.id)
reply(`_El aviso ha sido enviado a_ *_${anu.length}_* _chats, en un tiempo de_ *_${anu.length * 1.5}_* _segundos_`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'YouTube 🔎',
url: `${global.ytlink}`
}
}, {
quickReplyButton: {
displayText: 'Estado 🚀',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Menu 📰',
id: 'menu'
}  
}, {
quickReplyButton: {
displayText: 'Desarollador 👤',
id: 'owner'
}
}]
let txt = `*「 <AVISO GENERAL/> 」*\n\n${text}`
walle.send5ButImg(yoi, txt, `${global.botname}`, thumb, btn, thumb)
}
}
break 

case 'avisogrupos':
case 'avisogps':
case 'warninggroups': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!isCreator) return 
if (!args.join(" ")) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Ola :3“_*`)
let getGroups = await walle.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`_El aviso ha sido enviado a_ *_${anu.length}_* _chats, en un tiempo de_ *_${anu.length * 1.5}_* _segundos_`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'YouTube 🔎',
url: `${global.ytlink}`
}
}, {
quickReplyButton: {
displayText: 'Estado 🚀',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Menu 📰',
id: 'menu'
}  
}, {
quickReplyButton: {
displayText: 'Desarollador 👤',
id: 'owner'
}
}]
let txt = `*「 <AVISO GENERAL/> 」*\n\n${text}`
walle.send5ButImg(i, txt, `${global.botname}`, thumb, btn, thumb)
}
}
break

//Menu Grupo 👥
case 'autosticker': 
case 'autost':
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!isAdmins && !isCreator) return reply(answer.admin)
if (args.length < 1) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} activar“_* _para activar &_ *_‟${prefix + command} desactivar“_* para desactivar`)
if (args[0]  === 'activar'){
if (isAutoSticker) return reply(`_!Autosticker ya activo!_`)
autosticker.push(from)
fs.writeFileSync('./src/autosticker.json', JSON.stringify(autosticker))
reply('_¡Autosticker ha sido activado con exito, ahora al enviar una imagen se hara un sticker automáticamente!_')
} else if (args[0] === 'desactivar'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./src/autosticker.json', JSON.stringify(autosticker))
reply('_¡Autosticker ha sido desactivado con exito!_')
}
break

case 'antiarabes': {
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group)
if (!isBotAdmins) return reply(answer.botAdmin)
if (!isAdmins && !isCreator) return reply(answer.admin)
if (args[0] === "activar") {
if (AntiArabes) return reply('_¡AntiArabes ya activo!_')
antiarabes.push(activar, 1)
fs.writeFileSync('./src/antiarabes.json', JSON.stringify(antiarabes))
reply(`_Ok,_ *_‟${prefix + command} “_* _ha sido activado con éxito!_`)
var groupe = await walle.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
walle.sendMessage(from, {text: `*「 <AVISO/>️ 」*\n\n_La función_ *_‟${prefix + command}“_* _se ha habilitado en este grupo, lo que significa que los números ‟extraños” seran eliminados del grupo como por ejemplo:_ *'258', '92', '91', '357', '359', '91', '234', '212', '213', '233', '258', '297', '350', '371', '380', '972'*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "desactivar") {
if (!AntiArabes) return reply(`_Ok,_ *_‟${prefix + command} “_* _ha sido desactivado con éxito!_`)
let desactivar = antiarabes.indexOf(from)
antiarabes.splice(desactivar, 1)
fs.writeFileSync('./src/antiarabes.json', JSON.stringify(antiarabes))
reply(`_¡Ok,_ *_‟${prefix + command}“_* _ha sido desactivado!_`)
} else {
let buttonsantiarabes = [
{ buttonId: `${prefix + command} activar`, buttonText: { displayText: 'Activar ✳️' }, type: 1 },
{ buttonId: `${prefix + command} desactivar`, buttonText: { displayText: 'Desactivar ❌' }, type: 1 }
]
await walle.sendButtonText(m.chat, buttonsantiarabes, `_Porfavor eliga una opción._`, `${global.botname}`, cpubli)
}
}
break

case 'juegos': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group)
if (!isAdmins && !isCreator) return reply(answer.admin)
if (args[0] === "activar") {
if (AntiJuegos) return reply('_¡Modo juegos ya activo!_')
antijuegos.push(from)
reply('_¡El modo juegos ha sido activado!_')
var groupe = await walle.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
walle.sendMessage(from, {text: `*「 <AVISO/>️ 」*\n\n_¡El modo_ *_Juegos_* _permite menciones que pueden llegar a ser molestas!_`, contextInfo: { mentionedJid : mems }}, {quoted:cpubli})
} else if (args[0] === "desactivar") {
if (!AntiJuegos) return reply('_¡El modo juegos ha sido desactivado con exito!_')
let off = antijuegos.indexOf(from)
antijuegos.splice(off, 1)
reply('_¡El modo juegos ha sido desactivado con exito!_')
} else {
let buttonsntjuegos = [
{ buttonId: `${prefix + command} activar`, buttonText: { displayText: 'Activar ✳️' }, type: 1 },
{ buttonId: `${prefix + command} desactivar`, buttonText: { displayText: 'Desactivar ❌' }, type: 1 }
]
await walle.sendButtonText(m.chat, buttonsntjuegos, `_Porfavor eliga una opción._`, `${global.botname}`, cpubli)
}
}
break

case 'nsfw': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group)
if (!isAdmins && !isCreator) return reply(answer.admin)
if (args[0] === "activar") {
if (AntiNsfw) return reply('_¡Nsfw (18) ya activo!_')
antinsfw.push(from)
reply('_¡Nsfw (+18) ha sido activada con exito!_')
var groupe = await walle.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
walle.sendMessage(from, {text: `*「 <AVISO/>️ 」*\n\n_¡El modo *NSFW* permite enviar contenido explícito no apto o recomendable para menores de edad!_`, contextInfo: { mentionedJid : mems }}, {quoted:cpubli})
} else if (args[0] === "desactivar") {
if (!AntiNsfw) return reply('_¡NSFW ha sido desactivado con exito!_')
let off = antinsfw.indexOf(from)
antinsfw.splice(off, 1)
reply('_¡NSFW ha sido desactivado con exito!_')
} else {
let buttonsntnsfw = [
{ buttonId: `${prefix + command} activar`, buttonText: { displayText: 'Activar ✳️' }, type: 1 },
{ buttonId: `${prefix + command} desactivar`, buttonText: { displayText: 'Desactivar ❌' }, type: 1 }
]
await walle.sendButtonText(m.chat, buttonsntnsfw, `_Porfavor eliga una opción._`, `${global.botname}`, cpubli)
}
}
break

case 'nombregp': 
case 'nombregp': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!isBotAdmins) return reply(answer.botAdmin)
if (!isAdmins && !isCreator) return reply(answer.admin)
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Walle“_*`)
await walle.groupUpdateSubject(m.chat, text).then((res) => reply(answer.success)).catch((err) => reply(jsonformat(err)))
}
break

case 'descripcióngp':
case 'descripciongp': 
case 'descgp': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!isBotAdmins) return reply(answer.botAdmin)
if (!isAdmins && !isCreator) return reply(answer.admin)
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Walle“_*`)
await walle.groupUpdateDescription(m.chat, text).then((res) => reply(answer.success)).catch((err) => reply(jsonformat(err)))
}
break

case 'fotogp': 
case 'picgp': 
case 'fotogrupo': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!isBotAdmins) return reply(answer.botAdmin)
if (!m.isGroup) return reply(answer.group) 
if (!isAdmins && !isCreator) return reply(answer.admin)
if (!quoted) return reply(`_Envie una imagen & responda a esta con_ *_‟${prefix + command}“_*`)
if (!/image/.test(mime)) return reply(`_Envie una imagen & responda a esta con_ *_‟${prefix + command}“_*`)
if (/webp/.test(mime)) return reply(`_Envie una imagen & responda a esta con_ *_‟${prefix + command}“_*`)
let media = await walle.downloadAndSaveMediaMessage(quoted)
await walle.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
replyy(answer.success)
}
break

case 'tangall':
case 'mencionaratodos':
case 'taall':
case 'invocar': 
case 'tagall': {
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group)
if (!isAdmins) return reply(answer.admin)
let teks = `*「 <TAGALL/> 」*

*Aviso/Mensaje: ${q ? q : 'Ola'}*\n\n`
for (let mem of participants) {
teks += `✘ @${mem.id.split('@')[0]} \n`
}
walle.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: cpubli })
}
break

case 'hidetag': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!isAdmins && !isCreator) return reply(answer.admin)
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Ola :3“_*`)
walle.sendMessage(m.chat, { text: `${text}`, mentions: participants.map(a => a.id)}, { quoted: cpubli })
}
break

case 'enlacegrupo':
case 'enlacegp':
case 'linkgrupo':
case 'grupolink': 
case 'linkgp': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!isAdmins && !isCreator) return reply(answer.admin)
let response = await walle.groupInviteCode(m.chat)
walle.sendMessage(m.chat, {text:`_Enlace del grupo:_ *https://chat.whatsapp.com/${response}*`, "contextInfo": {
mimetype: "image/jpeg",
text: `${global.ownername}`,
"forwardingScore": 1000000000,
sendEphemeral: true,
"externalAdReply": {
"title": `${global.botname}`,
"body": `*${prefix + command}*`,
"previewType": "PHOTO",
"thumbnailUrl": thumb,
"thumbnail": thumb,
"sourceUrl": `${global.ytlink}`
}}}, { quoted: cpubli, detectLink: true })
}
break

case 'restearenlace':
case 'resetlink': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group)
if (!isBotAdmins) return reply(answer.botAdmin)
if (!isAdmins && !isCreator) return reply(answer.admin)
walle.groupRevokeInvite(m.chat)
}
break

case 'editargp':
case 'infogp':
case 'editinfo': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!isBotAdmins) return reply(answer.botAdmin)
if (!isAdmins && !isCreator) return reply(answer.admin)
if (args[0] === 'abrir'){
await walle.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`_Exito al habilitar la edición de información del grupo_`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'cerrar'){
await walle.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`_Exito al deshabilitar la edición de información del grupo_`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'infogp abrir', buttonText: { displayText: 'Abrir ✳️' }, type: 1 },
{ buttonId: 'infogp cerrar', buttonText: { displayText: 'Cerrar ❌' }, type: 1 }
]
let buttonMessage = {
image: thumb,
jpegThumbnail: thumb,
caption: `*「 <EDITAR GRUPO/> 」*`,
footer: `${botname}`,
buttons: buttons,
headerType: 4
}
walle.sendMessage(m.chat, buttonMessage, { quoted: cpubli })
}
}
break

case 'group':
case 'grupo': 
case 'gp': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!isBotAdmins) return reply(answer.botAdmin)
if (!isAdmins && !isCreator) return reply(answer.admin)
if (args[0] === 'cerrar'){
await walle.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`_¡Exito al cerrar el grupo!_`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'abrir'){
await walle.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`_¡Exito al abrir el grupo!_`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'grupo abrir', buttonText: { displayText: 'Abrir ✳️' }, type: 1 },
{ buttonId: 'grupo cerrar', buttonText: { displayText: 'Cerrar ❌' }, type: 1 }
]
let buttonMessage = {
image: thumb,
jpegThumbnail: thumb,
caption: `*「 <ABRIR & CERRAR GRUPO/> 」*`,
footer: `${botname}`,
buttons: buttons,
headerType: 4
}
walle.sendMessage(m.chat, buttonMessage, { quoted: cpubli })
}
}
break

case 'promote':
case 'promover': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!isBotAdmins) return reply(answer.botAdmin)
if (!isAdmins && !isCreator) return reply(answer.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await walle.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply('_Ok, se ha promovido al usuario mencionado a administrador._')).catch((err) => reply(jsonformat(err)))
}
break

case 'degrade':
case 'degradar':
case 'designar': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!isBotAdmins) return reply(answer.botAdmin)
if (!isAdmins && !isCreator) return reply(answer.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await walle.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply('_Ok, se ha designado al usuario mencionado y ahora ya no es administrador._')).catch((err) => reply(jsonformat(err)))
}
break

case 'sacar':
case 'ban':
case 'kick': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group)
if (!isBotAdmins) return reply(answer.botAdmin)
if (!isAdmins && !isCreator) return reply(answer.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
reply('_Ok, eliminando al usuario mencionado._')
await sleep(1500)
await walle.groupParticipantsUpdate(m.chat, [users], 'remove')
}
break

case 'offline':
case 'afk': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
reply(`*${m.pushName}* _ahora esta afk/offline razon:_ *${args.join(" ") ? args.join(" ") : ''}*`)
}
break

case 'listonline': 
case 'listaonline': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
walle.sendText(m.chat, '*「 <PARTICIPANTES EN LINEA/> 」*\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, cpubli, { mentions: online })
}
break

case 'antilinkgp':
case 'antilinkgroup':
case 'antilinkgrupos': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!isBotAdmins) return reply(answer.botAdmin)
if (!isAdmins && !isCreator) return reply(answer.admin)
if (args[0] === "activar") {
if (AntiLink) return reply('_*Antilinkgrupos*_ _¡Ya activo!_')
antilinkgp.push(from)
reply('_*Antilinkgrupo*_ _¡Ha sido activado con éxito!_.')
var groupe = await walle.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
walle.sendMessage(from, {text: `*「 <AVISO/> 」*\n\n_Se removera inmediatamente a cualquier participante que envie el link de un grupo ajeno._`, contextInfo: { mentionedJid : mems }}, {quoted:cpubli})
} else if (args[0] === "desactivar") {
if (!AntiLink) return reply('_Aun no esta activo._')
let off = antilinkgp.indexOf(from)
antilinkgp.splice(off, 1)
reply('_*Antilinkgrupo_* _¡Ha sido desactivado con exito!_')
} else {
let buttonsntilink = [
{ buttonId: `${command} activar`, buttonText: { displayText: 'Activar ✳️' }, type: 1 },
{ buttonId: `${command} desactivar`, buttonText: { displayText: 'Desactivar ❌' }, type: 1 }
]
await walle.sendButtonText(m.chat, buttonsntilink, `_Porfavor eliga una opción._`, `${global.botname}`, cpubli)
}
}
break

case 'antilink':
case 'antilinkall': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!isBotAdmins) return reply(answer.botAdmin)
if (!isAdmins && !isCreator) return reply(answer.admin)
if (args[0] === "activar") {
if (AntiLinkAll) return reply('_*Antilink_* _¡Ya activo!_.')
antilink.push(from)
reply('*_Antilink_* _¡Ha sido activado con exito!_')
var groupe = await walle.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
walle.sendMessage(from, {text: `*「 <AVISO/>️ 」*\n\n_Se removera inmediatamente a cualquier participante que envie un link._`, contextInfo: { mentionedJid : mems }}, {quoted:cpubli})
} else if (args[0] === "off") {
if (!AntiLinkAll) return reply('_Aun no activo._')
let off = antilink.indexOf(from)
antilink.splice(off, 1)
reply('_*Antilink_* _¡Ha sido desactivado con éxito!_')
} else {
let buttonsntilink = [
{ buttonId: `${command} activar`, buttonText: { displayText: 'Activar ✳️' }, type: 1 },
{ buttonId: `${command} desactivar`, buttonText: { displayText: 'Desactivar ❌' }, type: 1 }
]
await walle.sendButtonText(m.chat, buttonsntilink, `_Porfavor elige una opción._`, `${global.botname}`, cpubli)
}
}
break

//Menu Busqueda 🔎
case 'stalktiktok':
case 'tiktokstalk':
if(!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} marianacantu”_*`)
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
anu = await fetchJson(`https://zenzapis.xyz/stalker/tiktok?username=${text}&apikey=${zenapi}`)
walle.sendMessage(m.chat, { image: { url: `${anu.result.profile}` }, caption: `*「 <STALK TIKTOK/> 」*\n\n*_Usuario:_* _${anu.result.name}_\n*_Seguidores:_* _${anu.result.followers}_\n*_Siguiendo:_* _${anu.result.following}_\n*_Biografia:_* _${anu.result.description}_` }, { quoted: cpubli })
break

case 'igstalk':
case 'stalkig':
case 'instagramstalk':
if(!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} amai.valle”_*`)
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
anu = await fetchJson(`https://api.nxr.my.id/api/igstalk?username=${text}&apikey=${nxrapi}`)
walle.sendMessage(m.chat, { image: { url: `${anu.data.photo}` }, caption: `*「 <STALK INSTAGRAM/> 」*\n\n*_Nombre:_* _${anu.data.name}_\n*_Usuario:_* _${anu.data.username}_\n*_Biografia:_* _${anu.data.about}_\n*_Publicaciones:_* _${anu.data.post}_\n*_Seguidores:_* _${anu.data.follower}_\n*_Siguiendo a:_* _${anu.data.following}_` }, { quoted: cpubli })
break

case 'githubstalk':
case 'stalkgithub':
case 'gitstalk':
if(!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} saidemx”_*`)
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
anu = await fetchJson(`https://zenzapis.xyz/stalker/github?username=${text}&apikey=${zenapi}`)
walle.sendMessage(m.chat, { image: { url: `${anu.result.avatar_url}` }, caption: `*「 <STALK GITHUB/> 」*\n\n*_Usuario:_* _${anu.result.name}\n*_Id:_* _${anu.result.id}_\n*_Compañia:_* _${anu.result.company}_\n*_Segudores:_* _${anu.result.followers}_\n*_Siguiendo:_* _${anu.result.following}_\n*_Compañia:_* _${anu.result.company}_\n*_Blog:_* _${anu.result.blog}_\n*_Biografia:_* _${anu.result.bio}_\n*_Repositorios Publicos:_* _${anu.result.public_repos}_\n*_Fecha De Creación:_* _${anu.result.created_at}_\n*_Ultima Actualización:_* _${anu.result.updated_at}_` }, { quoted: cpubli })
break

case 'covidindo':
case 'covid':
anu = await fetchJson(`https://zenzapis.xyz/information/covidworld?apikey=${zenapi}`)
reply(`*「 <COVID INFORMACIÓN/> 」*\n\n*_Total Casos:_* _‟${anu.result.totalCases}”_\n*_Total Recuperaciónes:_* _‟${anu.result.recovered}”_\n*_Total Muertes:_* _‟${anu.result.deaths}”_\n*_Total Casos Activos:_* _‟${anu.result.activeCases}”_\n*_Ultima Actualización_* _‟${anu.result.lastUpdate}”_`)
break

case 'musica': 
case 'música': 
case 'play': 
case 'song': 
case 'ytplay':{
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!text) return reply(`_Ejemplo de uso:_ *${prefix + command}* Driver License`)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
ngen = `*📍 Titulo:* _${anu.title}_\n*🆔 ID:* _${anu.videoId}_\n*🕜 Duración:* _${anu.timestamp}_\n*👁️ Vistas:* _${anu.views}_\n*🗓️ Publicado:* _${anu.ago}_\n*🔰 Canal:* ${anu.author.name}`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload: walle.waUploadToServer })
template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: ngen,
hydratedFooterText: `Busqueda: ${text}`,
hydratedButtons: [{
urlButton: {
displayText: 'Reproducir En Youtube 📺',
url: `${anu.url}`
}
}, {
urlButton: {
displayText: 'Ver Canal 📋',
url: `${anu.author.url}`
}
}, {
quickReplyButton: {
displayText: 'Audio 🎧',
id: `${prefix}ytmp3 ${anu.url} 320kbps`
}
}, {
quickReplyButton: {
displayText: 'Video 📹',
id: `${prefix}ytmp4 ${anu.url} 360p`
}
}, {
quickReplyButton: {
displayText: 'Buscar Nuevamente ♻️',
id: `${prefix}play ${text}`
}
}]
}
}
}), { userJid: m.chat, quoted: cpubli })
 walle.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break

case 'ytmp3': 
case 'ytaudio': {
let { yta } = require('./lib/y2mate')
 if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} https://youtu.be/Fqv9o9Y-Ofc 320kbps”_*`)
let quality = args[1] ? args[1] : '320kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return reply('*_Opps, el archivo pesa demasiado mi limite es de 100 MB_*')
walle.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: cpubli })
}
break

case 'ytmp4': 
case 'ytvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) return reply(`*_Ejemplo de uso:_ *_‟${prefix + command} https://youtu.be/Fqv9o9Y-Ofc 360p”_*`)
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return reply('*_Opps, el archivo pesa demasiado mi limite es de 100 MB_*')
 walle.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Walle Bot - MD` }, { quoted: cpubli })
}
break

case 'letra':
case 'lyrics': {
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Driver License“_*`)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`_- Titulo:_ *_${result.title}_*\n_- Autor:_ *_${result.author}_*\n_- Enlace:_ *_${result.link}_*\n_- Lyrics:_ ${result.lyrics}
`.trim())
}
break

case 'googleimagen':
case 'imagen':
case 'ggimagen': 
case 'giimage': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!args[0]) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Minion“_*`)
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix + command} ${args.join(" ")}`, buttonText: {displayText: 'Siguiente ▶️'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*「 <GOOGLE IMAGEN/> 」*\n\n_- Titulo:_ *_${text}_*\n_- Enlace:_ *_${images}_*`,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.ownername}`,
body:`${prefix + command}`,
thumbnail: thumb,
mediaType:2,
mediaUrl: `${global.ytlink}`,
sourceUrl: `${global.ytlink}`
}}
}
walle.sendMessage(m.chat, buttonMessage, { quoted: cpubli })
})
}
break

case 'pinterest': 
case 'pin': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!args.join(" ")) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Autos“_*`)
try {
hx.pinterest(args.join(" ")).then(async(res) => {
imgnyee = res[Math.floor(Math.random() * res.length)]
let buttons = [
{buttonId: `${prefix + command} ${args.join(" ")}`, buttonText: {displayText: 'Siguiente ▶️'}, type: 1}
]
let buttonMessage = {
image: { url: imgnyee },
caption:  `_- Titulo:_ ` + args.join(" ") + `\n_- Enlace:_ `+imgnyee,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.botname}`,
body:`${global.ownername}`,
thumbnail: thumb,
mediaType:2,
mediaUrl: `${global.ytlink}`,
sourceUrl: `${global.ytlink}`
}}
}
walle.sendMessage(m.chat, buttonMessage, { quoted: cpubli })
}).catch(_ => _)
} catch {
reply("_Opps, ha ocurrido un error :/_")
}
}
break

case 'film':
case 'pelicula':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
if (!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Minions“_*`)
wallekey.Film(q)
.then(data => {console.log(data)
let krl = `_❒「  Pelicula:_ *_${q}_* 」\n_Autor:_ *_${data[0].author}_*\n\n`
for (let i of data) {
krl += (`\n────────────────────\n\n _🔎 Titulo:_ *_${i.judul}_*\n _📟 Calidad:_ *_${i.quality}_*\n _🖥️ Tipo:_ *_${i.type}_*\n _⌛ Fecha De Subida:_ *_${i.upload}_*\n _🌍 Enlace:_ *_${i.link}_*`)
}
walle.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: cpubli })
});
break

case 'searchgp':
case 'buscargps':
case 'buscargrupos': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (args.length < 1) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Hola“_*`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '*「 <Buscar Grupos/> 」*'
for (let i of res) {
teks += `\n\n•> *Grupos Whatsapp* :\n`
teks += `*${i.link}*\n`
teks += `*${i.nama}*`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu ✳️'}, type: 1}
]
let buttonMessage = {
image: thumb,
jpegThumbnail: thumb,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
walle.sendMessage(m.chat, buttonMessage, { quoted: cpubli })
})
}
break

case 'tono':
case 'ringtone': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!args.join(" ")) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} black over“_*`)
let { ringtone } = require('./lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
walle.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: cpubli })
}
break

case 'anime':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Naruto“_*`)
const { Anime } =require("@shineiichijo/marika")
const client = new Anime();
let anime = await client.searchAnime(q)
let result = anime.data[0];
console.log(result)
let details = `🎀 _Titulo:_ *_${result.title}_*\n`;
details += `🎋 _Formato:_ *_${result.type}_*\n`;
details += `📈 _Estado:_ *_${result.status.toUpperCase().replace(/\_/g, " ")}_*\n`;
details += `🍥 _Episodios:_ *_${result.episodes}_*\n`;
details += `🎈 _Duración:_ *_${result.duration}_*\n`;
details += `🧧 _Genero:_\n`;
for (let i = 0; i < result.genres.length; i++) {
details += `\t\t\t\t\t\t\t\t*_${result.genres[i].name}_*\n`;
}
details += `✨ _Basado en:_ *_${result.source.toUpperCase()}_*\n`;
details += `🔎 _Estudios:_\n`;
for (let i = 0; i < result.studios.length; i++) {
details += `\t\t\t\t\t\t\t\t*_${result.studios[i].name}_*\n`;
}
details += `🎴 _Productores:_\n`;
for (let i = 0; i < result.producers.length; i++) {
details += `\t\t\t\t\t\t\t\t\t\t*_${result.producers[i].name}_*\n`;
}
details += `💫 _Premier en:_ *_${result.aired.from}_*\n`;
details += `🎗 _Termina en:_ *_${result.aired.to}_*\n`;
details += `🎐 _Popularidad:_ *_${result.popularity}_*\n`;
details += `🎏 _Favoritos:_ *_${result.favorites}_*\n`;
details += `🎇 _Calificación:_ *_${result.rating}_*\n`;
details += `🏅 _Rango:_ *_${result.rank}_*\n\n`;
if (result.trailer.url !== null)
details += `♦ _Trailer:_ *_${result.trailer.url}_*\n\n`;
details += `🌐 _Enlace:_ *_${result.url}_*\n\n`;
if (result.background !== null)
details += `🎆 _Background:_ *${result.background}*\n\n`;
details += `❄ _Descripción:_ ${result.synopsis.replace(
/\[Written by MAL Rewrite]/g,
""
)}`
walle.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:cpubli})
break

case 'wattpad': {
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Amor“_*`)
let res = await fetchJson(`https://zenzapis.xyz/webzone/wattpad?query=${text}&apikey=${zenapi}`)
let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
let capt =`*「 <WATTPAD/> 」*\n\n`
capt += `_- Titulo:_ *_${judul}_*\n`
capt += `- Leido: *_${dibaca}_*\n`
capt += `- Votos: *_${divote}_*\n`
capt += `- Paginas: *_${bab}_*\n`
capt += `- Enlace: *_${url}_*\n`
capt += `- Descripción: ${description}`
walle.sendImage(m.chat, thumb, capt, cpubli)
}
break

//Menu Descargas ⏬
case 'gorevideo':
case 'gore':
if (!m.isGroup) return reply(answer.group) 
if (!isPremium) return reply(answer.premium)
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
let anu = await fetchJson(`https://zenzapis.xyz/downloader/gore?apikey=${zenapi}`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente 💉`}, type: 1},
]
let buttonsospitogMessages = {
video: {url: anu.result.video1},
caption:  `*「 <GORE VIDEO/> 」*\n\n*Titulo:* _${anu.result.title}_\n*Autor:* ${anu.result.author}\n*Fuente:* _${anu.result.source}_\n*Vistas:* _${anu.result.view}_\n*Subido Hace:* _${anu.result.upload}_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonsospitogMessages,{ quoted:cpubli }).catch(err => {
return('_¡Opps, ha ocurrido un error! ;(_')
})
break

case 'xvideoss':
case 'playxvideos':
case 'xvideosbusqueda':{
if (!m.isGroup) return reply(answer.group) 
if (!isPremium) return reply(answer.premium)
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Lana Rhoades“_*`)
let fetch = await fetchJson(`https://zenzapis.xyz/searching/xvideos?apikey=${zenapi}&query=${text}`)
var wbuttsss = [
{buttonId: `${prefix}xvideosdl ${fetch.result[0].url}`, buttonText: {displayText: `Descargar 🔥`}, type: 1},
]
let buttonsospitozMessages = {
image: {url: fetch.result[0].thumb},
caption:  `*「 <XVIDEOS BUSQUEDA/> 」*\n\n*Titulo:* _${fetch.result[0].title}_\n*Duración:* _${fetch.result[0].duration}_\n*Enlace:* _${fetch.result[0].url}_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonsospitozMessages,{ quoted:cpubli }).catch(err => {
return('_¡Opps, ha ocurrido un error! ;(_')
})
}
break

case 'xnxxs':
case 'playxnxx':
case 'xnxxbusqueda':
if (!m.isGroup) return reply(answer.group) 
if (!isPremium) return reply(answer.premium)
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Mia Khalifa“_*`)
let fetch = await fetchJson(`https://zenzapis.xyz/searching/xnxx?apikey=${zenapi}&query=${text}`)
var wbuttsss = [
{buttonId: `${prefix}xnxxdl ${fetch.result[0].url}`, buttonText: {displayText: `Descargar 🔥`}, type: 1},
]
let buttonsospitoxMessages = {
image: {url: fetch.result[0].thumb},
caption:  `*「 <XNXX BUSQUEDA/> 」*\n\n*Titulo:* _${fetch.result[0].title}_\n*Enlace:* _${fetch.result[0].url}_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonsospitoxMessages,{ quoted:cpubli }).catch(err => {
return('_¡Opps, ha ocurrido un error! ;(_')
})
break

case 'xvideosdl':
case 'xvideosdescagador':{
if (!m.isGroup) return reply(answer.group) 
if (!isPremium) return reply(answer.premium)
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} https://www.xvideos.com/video57779321/ensenando_las_nalgas_nalgona_rica“_*`)
let vid = await fetchJson(`https://zenzapis.xyz/downloader/xvideos?apikey=${zenapi}&url=${text}`)
var wbuttsss = [
{buttonId: `lol`, buttonText: {displayText: `🔥`}, type: 1},
]
let buttonsospitozbMessages = {
video: {url: vid.result.files.high},
caption:  `*「 <XVIDEOS DESCARGADOR/> 」*\n\n*Titulo:* _${vid.result.title}_\n*Duración:* _${vid.result.duration}_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonsospitozbMessages,{ quoted:cpubli }).catch(err => {
return('_¡Opps, ha ocurrido un error! ;(_')
})
}
break

case 'xnxxdl':
case 'xnxxvideo':
if (!m.isGroup) return reply(answer.group) 
if (!isPremium) return reply(answer.premium)
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} https://www.xnxx.com/video-13nhxfe6/mia_khalifa-_stuffed_deep_with_big_black_cock_“_*`)
let vid = await fetchJson(`https://zenzapis.xyz/downloader/xnxx?apikey=${zenapi}&url=${text}`)
var wbuttsss = [
{buttonId: `lol`, buttonText: {displayText: `🔥`}, type: 1},
]
let buttonsospitovMessages = {
video: {url: vid.result.files.high},
caption:  `*「 <XNXX DESCARGADOR/> 」*\n\n*Titulo:* _${vid.result.title}_\n*Detalles:* _${vid.result.info}_\n*Duración:* _${vid.result.duration}_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonsospitovMessages,{ quoted:cpubli }).catch(err => {
return('_¡Opps, ha ocurrido un error! ;(_')
})
break

case 'git': 
case 'gitclone':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex1.test(args[0])) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} https://github.com/Saidemx/HerokuBuildPackDucky“_*`)
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
walle.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: cpubli }).catch((err) => reply(answer.error))
break

case 'tiktoknomarcadeagua': 
case 'tiktok':
case 'tiktokdl': {
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} https://vm.tiktok.com/ZMN4wtUf1/?k=1“_*`)
let anu = await fetchJson(`https://zenzapis.xyz/downloader/tiktok?apikey=${zenapi}&url=${text}`)
let buttons = [
{buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'Marca De Agua 🖼️ '}, type: 1}
]
let buttonMessage = {
video: { url: anu.result.nobotname },
caption: `_Descargar:_ *_${text}_*`,
footer: 'WalleBot - MD',
buttons: buttons,
headerType: 5
}
walle.sendMessage(m.chat, buttonMessage, { quoted: cpubli })
}
break

case 'tiktokmarcadeagua': 
case 'tiktokwm': {
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} https://vm.tiktok.com/ZMN4wtUf1/?k=1“_*`)
let anu = await fetchJson(`https://zenzapis.xyz/downloader/tiktok?apikey=${zenapi}&url=${text}`)
let buttons = [
{buttonId: `${prefix + command} ${text}`, buttonText: {displayText: 'No Marca De Agua 🖼️ '}, type: 1}
]
let buttonMessage = {
video: { url: anu.result.botname },
caption: `_Descargar:_ *_${text}_*`,
footer: 'WalleBor - MD',
buttons: buttons,
headerType: 5
}
walle.sendMessage(m.chat, buttonMessage, { quoted: cpubli })
}
break

case 'mediafire': {
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} https://www.mediafire.com/file/kiyrbwbu6klw9fk/com.mod.download.zombie.catchers.v1.30.24.mod.unlimited.money.1.30.241.30.24.apk/file“_*`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`_¡Link invalido!_`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 400) return reply('_Este archivo es demasiado pesado_ '+util.format(baby1))
const result4 = `*「 <MEDIAFIRE/> 」*\n\n*_-Nombre:_* _${baby1[0].nama}_\n*_-Peso:_* _${baby1[0].size}_\n*_-Enlace:_* _${baby1[0].link}_`
reply(`${result4}`)
walle.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : cpubli }).catch ((err) => reply(answer.error))
}
break

//Menu Random ▶️
case 'edit':
case 'editanime':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
const eaappi = ["https://telegra.ph/file/6be0c669007b54c30b82f.mp4",
"https://telegra.ph/file/0c17d902bf4be024fd834.mp4", 
"https://telegra.ph/file/e5360d66e959c8bfca5be.mp4", 
"https://telegra.ph/file/8cdb142f5f0f4c9c775ea.mp4",
"https://telegra.ph/file/0cb6d9c040525d3b92e43.mp4",
"https://telegra.ph/file/e06be6053df1238e8bc9b.mp4",
"https://telegra.ph/file/6c0ea0312f0f6f9137ec9.mp4",
"https://telegra.ph/file/1e8e2d1263e8c2180cd33.mp4",
"https://telegra.ph/file/42284fd6243711f7ea0fd.mp4",
"https://telegra.ph/file/03463db6e71de825b5777.mp4",
"https://telegra.ph/file/68a6870f277949414f4dc.mp4",
"https://telegra.ph/file/efc912ed0122ca465d141.mp4",
"https://telegra.ph/file/8e4ff8da54188301edfe4.mp4",
"https://telegra.ph/file/2fb4928acde473ec23695.mp4",
"https://telegra.ph/file/1f28861d9fd55b473bdf6.mp4",
"https://telegra.ph/file/effa827f4d74a2ee1dd97.mp4",
"https://telegra.ph/file/b6284d61082fcfa924813.mp4",
"https://telegra.ph/file/8d6236fbbe61bcb1a6e4c.mp4",
"https://telegra.ph/file/34e0b8bd21585d8800e4e.mp4",
"https://telegra.ph/file/bf34da29c72e5d1c2fa9d.mp4",
"https://telegra.ph/file/0163090cdfa64961b4318.mp4",
"https://telegra.ph/file/971d48f8b93e139d1df4e.mp4",
"https://telegra.ph/file/8dd94339986fdda5c0cae.mp4",
"https://telegra.ph/file/d63dce4aec6fef6b8af39.mp4",
"https://telegra.ph/file/1f869b38630b97926feef.mp4",
"https://telegra.ph/file/abaa11ae678036549dc87.mp4",
"https://telegra.ph/file/5d380600521dbc8e14859.mp4",
"https://telegra.ph/file/b5cff390395e894917d91.mp4",
"https://telegra.ph/file/1ab98ab5429a896401386.mp4",
"https://telegra.ph/file/8d2f4ad6a8ee915b1ac44.mp4",
"https://telegra.ph/file/ea80a5b0e0c1ae7437600.mp4",
"https://telegra.ph/file/9895412393c2b830866e6.mp4",
"https://telegra.ph/file/3d6865690a28cff086d7f.mp4",
"https://telegra.ph/file/1950622c1cb36f8f75572.mp4",
"https://telegra.ph/file/695459d79d69dfa3f6f45.mp4",
"https://telegra.ph/file/38de2c58142ab88ddda0e.mp4",
"https://telegra.ph/file/ac4f1706f987cbfdced33.mp4",
"https://telegra.ph/file/84355e1c366a7d29e0192.mp4", 
"https://telegra.ph/file/c8d3edf2ecadab37ad351.mp4",
"https://telegra.ph/file/952af3c8034880caa7d88.mp4",
"https://telegra.ph/file/1226965e96103e8ca1e00.mp4",
"https://telegra.ph/file/ec988fd89911d5f5fd461.mp4",
"https://telegra.ph/file/6855127f7722f49399240.mp4",
"https://telegra.ph/file/a29936675cdc891a50641.mp4",
"https://telegra.ph/file/d05c991680210cd4cdd9a.mp4",
"https://telegra.ph/file/035b594c1d58e92cfd52c.mp4",
"https://telegra.ph/file/d7875c97e73c901905f8a.mp4",
"https://telegra.ph/file/34540a0c1c2e2b7d9dd5a.mp4",
"https://telegra.ph/file/8d1729ba33d313e76a968.mp4", 
"https://telegra.ph/file/4fd50f1340757ad93e674.mp4",
"https://telegra.ph/file/e28786bafa943cb46e7b6.mp4",
"https://telegra.ph/file/7a77825bbf58b079fb14d.mp4",
"https://telegra.ph/file/5e34899be47cd52debfdd.mp4",
"https://telegra.ph/file/0edd273c63f023fcdb88f.mp4",
"https://telegra.ph/file/f7db23c33284687323d0a.mp4",
"https://telegra.ph/file/040bf09d4923d123c27ed.mp4",
"https://telegra.ph/file/e3b5d655e493cb7e94ca1.mp4",
"https://telegra.ph/file/423ba982cd185e70b3701.mp4",
"https://telegra.ph/file/66296f4b39ac7db785dca.mp4",
"https://telegra.ph/file/151d060a88e8193effaed.mp4",
"https://telegra.ph/file/24a29fab8b84e8a610dce.mp4",
"https://telegra.ph/file/d17c87b56ac4f00aa56be.mp4",
"https://telegra.ph/file/734b37612c81f88ec52a1.mp4",
"https://telegra.ph/file/8d955d84731f43bdf05b8.mp4",
"https://telegra.ph/file/2519d47b6411375268fc6.mp4",
"https://telegra.ph/file/e1d9e94b2cb1ff31f6915.mp4",
"https://telegra.ph/file/7916e0df99358ef854809.mp4",
"https://telegra.ph/file/912ab771ab82ef66613e2.mp4",
"https://telegra.ph/file/2d16c94b85f667a92774d.mp4",
"https://telegra.ph/file/98cb66dc231fb1b274cb9.mp4",
"https://telegra.ph/file/e1b86f7da417d7979b1be.mp4",
"https://telegra.ph/file/330045730b66e72934bc1.mp4",
"https://telegra.ph/file/5c5a980230561c5614144.mp4",
"https://telegra.ph/file/ec16c5ef1deae889e6abd.mp4",
"https://telegra.ph/file/6a33e36f6b50db336b3c7.mp4",
"https://telegra.ph/file/7cb35f576ee4eb2d23101.mp4",
"https://telegra.ph/file/7acb4d7eccc4bb9940d85.mp4",
"https://telegra.ph/file/7b2ef6e9117a2a6a59a12.mp4",
"https://telegra.ph/file/3e07ea54ba211e8f85a27.mp4",
"https://telegra.ph/file/321b6393b81b4fc9456d7.mp4",
"https://telegra.ph/file/76956aeb626674383c2fc.mp4",
"https://telegra.ph/file/dcf66d725370367d85b0d.mp4",
"https://telegra.ph/file/e15ced6570701bc175e75.mp4",
"https://telegra.ph/file/9c208ffe64f4e43fe3919.mp4",
"https://telegra.ph/file/b8c374891ef895594addd.mp4",
"https://telegra.ph/file/1966268ae263832ffc91f.mp4",
"https://telegra.ph/file/2d86e59d7e07b052ef555.mp4",
"https://telegra.ph/file/a64f526c1f8802e1ba29b.mp4",
"https://telegra.ph/file/ae8b1c196c303282d52bc.mp4",
"https://telegra.ph/file/4fadd779e6041e3c11a88.mp4",
"https://telegra.ph/file/452bb2a4c71efd26404ba.mp4",
"https://telegra.ph/file/cc8f9f9e65bf8873de9d4.mp4",
"https://telegra.ph/file/20b70eced20a40189dada.mp4",
"https://telegra.ph/file/a1935bc69cff4972f4734.mp4",
"https://telegra.ph/file/9cc6a747b8743de5bebe1.mp4",
"https://telegra.ph/file/a58a4b8833e4e270ff840.mp4",
"https://telegra.ph/file/c64e7c5d462afd895e545.mp4",
"https://telegra.ph/file/e3fa75c3a3ce7537db2f9.mp4",
"https://telegra.ph/file/00348d290fc9c5f8a11d6.mp4"
]
const editapi = eaappi[Math.floor(Math.random() * eaappi.length)]
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonsospitoMessages = {
video: {url:editapi},
caption:  `_Edit Anime_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonsospitoMessages,{ quoted:cpubli }).catch(err => {
return('_¡Opps, ha ocurrido un error! ;(_')
})
break

case 'muslos':
case 'piernas':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
const mappi = ['https://i.ibb.co/Ks9pb1W/9f275380edf9dc880dcb0d5a3dbca6a3.jpg','https://i.ibb.co/gjWXmLC/3533226e711339839b60209457671490.jpg','https://i.ibb.co/Df0zdtS/6ef792e23a344133d949d93b1a1aad6c.jpg','https://i.ibb.co/bFfmLkK/eb8c5decd4d48b8b7badf53ed347548f.jpg','https://i.ibb.co/Cs7xCYb/e705e7ef851fd1ef28f5c5c82503d5a8.jpg','https://i.ibb.co/CQmGxrK/4fd449e4e7e204a325c46463c1317641.jpg','https://i.ibb.co/nrYJF36/f74f9dcd3ce561498aec4b286fe4aac9.jpg','https://i.ibb.co/nkDHBTb/2ad1fec7d236cf75824f85befc500041.jpg','https://i.ibb.co/vz8q1qt/6f565b5df7569ed4f7eda640f75ed36f.jpg','https://i.ibb.co/ftVqRqM/3e13d6cd29484e3ab0a6a0a1ae65ae5f.jpg','https://i.ibb.co/bLXgpMJ/fa9d739c1a74a16e6519ef4dd139d9b9.jpg','https://i.ibb.co/Qf279kq/2694e690c81b422228983d87958bc709.jpg','https://i.ibb.co/x3nmQgV/d72e49c3eeffc55ba2429b04073fa19f.jpg','https://i.ibb.co/PjbnGTp/471a10c0c619ff7702704d5a0febdb16.jpg','https://i.ibb.co/Ks2KKqv/c37311806fb683ad5a49addb1102f3cb.jpg','https://i.ibb.co/S61JVWX/db541d80edf7f4a4ab4f81732e54a4f2.jpg','https://i.ibb.co/sP6sVdk/FB-IMG-1642689411976.jpg','https://i.ibb.co/NTSV58v/FB-IMG-1642689388533.jpg','https://i.ibb.co/3TVnhxj/FB-IMG-1642689192131.jpg','https://i.ibb.co/BfkFZWC/FB-IMG-1642689182522.jpg','https://i.ibb.co/3TVnhxj/FB-IMG-1642689192131.jpg','https://i.ibb.co/Dpjk4dK/FB-IMG-1642689178538.jpg','https://i.ibb.co/HNLKhqt/FB-IMG-1642689287403.jpg','https://i.ibb.co/y6GQ9Bm/FB-IMG-1642689278174.jpg','https://i.ibb.co/XSKcYxr/FB-IMG-1642689166950.jpg','https://i.ibb.co/bKQcq1g/FB-IMG-1642689269847.jpg','https://i.ibb.co/cvPYWJ4/FB-IMG-1642689245092.jpg','https://i.ibb.co/gSQnrGt/FB-IMG-1642689052853.jpg','https://i.ibb.co/kHJys56/FB-IMG-1642689230981.jpg','https://i.ibb.co/44PY1Zk/IMG-20220120-WA0040.jpg','https://i.ibb.co/9NpYdHb/FB-IMG-1642689225093.jpg','https://i.ibb.co/7zqM19Q/FB-IMG-1642689431145.jpg','https://i.ibb.co/W6JpfjS/FB-IMG-1642689213385.jpg','https://i.ibb.co/z2VCcZL/36.jpg','https://i.ibb.co/bQV5L57/19.jpg','https://i.ibb.co/r7SLyW9/44.jpg','https://i.ibb.co/X88smdC/52.jpg','https://i.ibb.co/M6Y8r1J/28.jpg','https://i.ibb.co/McYdssM/37.jpg','https://i.ibb.co/C8rXsvn/2.jpg','https://i.ibb.co/86vLPkV/29.jpg','https://i.ibb.co/LNWqFkN/46.jpg','https://i.ibb.co/59qq440/43.jpg','https://i.ibb.co/WpqFBZF/51.jpg','https://i.ibb.co/tqVskKX/34.jpg','https://i.ibb.co/GM0JJqB/1.jpg','https://i.ibb.co/947G8YP/38.jpg','https://i.ibb.co/8dkVGhd/5.jpg','https://i.ibb.co/Yp6tY14/33.jpg','https://i.ibb.co/Wsz4z67/26.jpg','https://i.ibb.co/z2nhgp1/20.jpg','https://i.ibb.co/n08nQp9/13.jpg','https://i.ibb.co/0Zy8yKt/4.jpg','https://i.ibb.co/30fXMPs/50.jpg','https://i.ibb.co/tDR6fP7/39.jpg','https://i.ibb.co/FW0RXMh/32.jpg','https://i.ibb.co/6rdkMwz/45.jpg','https://i.ibb.co/10Jjk7t/3.jpg','https://i.ibb.co/Sr9wqjJ/27.jpg','https://i.ibb.co/2jVPfhn/14.jpg','https://i.ibb.co/XsJ8JQ7/7.jpg','https://i.ibb.co/4MgmmWQ/31.jpg','https://i.ibb.co/mc37mfg/8.jpg','https://i.ibb.co/GVqcd8J/15.jpg','https://i.ibb.co/nsF78RH/22.jpg','https://i.ibb.co/vj0By92/24.jpg','https://i.ibb.co/0XhzZN9/6.jpg','https://i.ibb.co/q03wSgZ/16.jpg','https://i.ibb.co/ZfdNQW8/30.jpg','https://i.ibb.co/Gs15rLT/9.jpg','https://i.ibb.co/WVWCT7f/21.jpg','https://i.ibb.co/gZs87zq/25.jpg','https://i.ibb.co/yqcwyv1/12.jpg','https://i.ibb.co/ydYvKzm/17.jpg','https://i.ibb.co/kD4X4y0/42.jpg','https://i.ibb.co/whxxqNv/47.jpg','https://i.ibb.co/4JZy1R3/11.jpg','https://i.ibb.co/cr2McHR/35.jpg','https://i.ibb.co/CsnjVHF/48.jpg','https://i.ibb.co/LYM5ZDx/41.jpg','https://i.ibb.co/4WScd2W/18.jpg','https://i.ibb.co/R6HVC5g/40.jpg','https://i.ibb.co/1GT0dVg/49.jpg','https://i.ibb.co/XbYMYxL/53.jpg','https://i.ibb.co/RS27hgF/23.jpg','https://i.ibb.co/92BxN3c/10.jpg']
const muslosapi = mappi[Math.floor(Math.random() * mappi.length)]
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonsospitMessages = {
image: {url:muslosapi},
caption:  `_Muslos_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonsospitMessages,{ quoted:cpubli }).catch(err => {
return('_¡Opps, ha ocurrido un error! ;(_')
})
break

case 'ari':
case 'ary':
case 'arigameplays':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
const aappi = ['https://i.ibb.co/5R8STJP/9e6a77222e686109cb2c313719018646.jpg','https://i.ibb.co/qYdHHTS/e678286658aac6df6600a5f601b5288c.jpg','https://i.ibb.co/8NDVbQN/646407207350957a00c82b605775dd56.jpg','https://i.ibb.co/85XXN5p/af4d27e7e07df578e69b42616321dad6.jpg','https://i.ibb.co/Q8XWFmc/7c6719e8622e9aaff2a5b07a020baf6d.jpg','https://i.ibb.co/C1NH9vh/14fb06b3008c44de452b667a1e838010.jpg','https://i.ibb.co/4J5fSnx/6948e3c25adbd1f1b18de1da15062ba0.jpg','https://i.ibb.co/g9Br2mc/4a031aadf4d416d9770791e3f09d78e0.jpg','https://i.ibb.co/rdTwC9t/43bdeb3b62f98024a64b12ed6db6f1c8.jpg','https://i.ibb.co/0tHhk2Z/6c026916852755588a46653fddbcabf9.jpg','https://i.ibb.co/KhgSmdG/c09ae077e6a3c6d18ed3ad8ebda9b0ec.jpg','https://i.ibb.co/nMYxc15/54d3f567779fdee8bb69d2bdd8143cf4.jpg','https://i.ibb.co/mcv1XKm/9231cd5dc3771f11781175679973bc84.jpg','https://i.ibb.co/Sr0q6rH/00a16dd8061a0700f16954d2cd626cd0.jpg','https://i.ibb.co/nLQC64M/7af82d17fd92061a956ba5e31413d6e9.jpg','https://i.ibb.co/N304bfw/0a3f9d91177dc02937f9c645565e738c.jpg','https://i.ibb.co/Yc8pnsG/443c14c717868d3eabf18259350c89c4.jpg','https://i.ibb.co/5sLSbzD/a13c11689156e8d5f67ee017ee3f03f4.jpg','https://i.ibb.co/2gbj9bY/2dbcc946e15525f8621968f0af5cbba1.jpg','https://i.ibb.co/PmTS7cG/ef0279748dddc505081c090c9a20b848.jpg','https://i.ibb.co/C2ptGFF/2924080a0a947bedb00aa8311991e134.jpg','https://i.ibb.co/nb72jNP/d47b4c2451cdce1296972a67bf1ee0ad.jpg','https://i.ibb.co/PWPLMyd/c528f4a88b55d7f30f90a0a118887e10.jpg','https://i.ibb.co/W03PKJQ/c78d6ea33dbc89e8ac341142156374fa.jpg','https://i.ibb.co/MfKBVWk/6db06b3569c5de356219021f152ee43e.jpg','https://i.ibb.co/cyL8B4F/543e0b52c7477be2ba856e7c39fa8da6.jpg','https://i.ibb.co/RQfSSmy/21dac498596dd197f81d313070dbc167.jpg','https://i.ibb.co/PTJct14/df74df05165aaa42a549e83ccda1ed4b.jpg','https://i.ibb.co/rFrFLzd/23bf5a59a8229a8b64085db382a986db.jpg','https://i.ibb.co/ckZWSdw/d021f8e1c78bd5037b1aa83d5720c108.jpg','https://i.ibb.co/PDqgf1S/2f484fc6dbae1075ba41ff1f286a78e5.jpg','https://i.ibb.co/yB9syRC/43f653de285df72699e5da3299f29649.jpg','https://i.ibb.co/60v6nC7/46390118d6f825eda923efeeb47056ea.jpg','https://i.ibb.co/D8D4Nqf/58779f2fbaec9f7cd52bd62c9a60a49e.jpg','https://i.ibb.co/rtRTgyr/6b02748b42b750c50f466fbd9f759554.jpg','https://i.ibb.co/HnrsmX0/7823e180168c562d589f303bc93702b9.jpg','https://i.ibb.co/Z2tcGmB/ab3df83936784d6e8a56d2963ee5d840.jpg','https://i.ibb.co/wMRQSDc/06d251e928078ce399d66fbf0a4f9639.jpg','https://i.ibb.co/6WDLjYM/92496cf5a0b33d8a684670c7ac437d85.jpg','https://i.ibb.co/1RGP6Rk/55e9e9aa9695b799f4881d1dbd79d1da.jpg','https://i.ibb.co/pJQNNT9/2d03f5f8d6c57474874768220618c6cf.jpg','https://i.ibb.co/fFhRgPr/95502b724baeae92e36551e08b9e359b.jpg','https://i.ibb.co/RhpDV1c/38e7418da7f6ce08cbc2cd3a9e8c2741.jpg','https://i.ibb.co/mCRSfXG/85b3e057747d8c4fe49c9dbdb3ee253d.jpg','https://i.ibb.co/pRQkMDH/45d57e182eb1fdd035d4bca2a3d650bd.jpg','https://i.ibb.co/52r5nYb/087ea85f64e599cc3944ca80b665b192.jpg','https://i.ibb.co/4p1vX4M/29ab46d440b232b0bb79fb00e3c563b3.jpg','https://i.ibb.co/SRSRk7k/5b4274f72b6ea45ca890977c7b7ba619.jpg','https://i.ibb.co/Kzs62s6/622089f20ab0f11b8ffc5294e3fe3854.jpg','https://i.ibb.co/Wxzmjb5/12916625c975d4decdde7816dec7db43.jpg','https://i.ibb.co/wQ1FK7w/5ac9267c24c9742ada747c1d384523a4.jpg','https://i.ibb.co/2YNP66s/35ed94dc8856dff0e5d654e12910345e.jpg','https://i.ibb.co/r0RKFY8/4bdd1a09a0f6418adac1e575be1de4f7.jpg','https://i.ibb.co/JdnBrWw/95ac9e5c333372b7bf568bfd7a355955.jpg','https://i.ibb.co/PrL3vR0/c3bb0e213f14c92fa22e8a07401f9256.jpg','https://i.ibb.co/TvWqCmZ/f4e8afa295cf798a66a4476b0006ec8d.jpg','https://i.ibb.co/M1ZSXv1/732a48ca69179fae30db4e9ef6ed3e15.jpg','https://i.ibb.co/64nrkZY/a50aa826cf21c76acfce3eedf2ed3a5a.jpg','https://i.ibb.co/0fwPcS3/246fb7b8833eb0b7c3bf673b5ac83950.jpg','https://i.ibb.co/PWg1fFc/4aa0b8051c3e1118aaeda4869962bdc0.jpg','https://i.ibb.co/ZgR4nXr/10ba331e0d5eada9ea99972875c50cf1.jpg','https://i.ibb.co/5v4RSMJ/94ddf3a62b54ed8803ed01f2194d3bd8.jpg','https://i.ibb.co/ZfVw01Q/310eb4b0123b6ba85e76044807e2c0d0.jpg','https://i.ibb.co/QvZL7KM/cd1fb69cb6e6c3446f9a83faf45459d7.jpg','https://i.ibb.co/1zYDMsH/a2e630c219b4ba8ca2da13dda433ad84.jpg','https://i.ibb.co/y4qPBzV/83d880f8a8ad6c13c2a4d9443e35b442.jpg','https://i.ibb.co/gjqjWcF/ad04ab89108a7107cc6949fe88390b81.jpg','https://i.ibb.co/SQf8X1B/5358236509f0a82c1832c04c6b874d9b.jpg','https://i.ibb.co/Hhzr8Kf/f20a497468b2f32ab388aba50f6c9fd6.jpg','https://i.ibb.co/DwSnJgC/c7e463ef7c620a2b1a0731d533245a21.jpg','https://i.ibb.co/58Hmh2g/e1e112bffb9667464ef5958f821e4a36.jpg','https://i.ibb.co/3Mw5GNK/ed937db9724901351d606458defae1e1.jpg','https://i.ibb.co/pPhqcMM/26f94ad076cb898a5cf35afc6de1bd42.jpg','https://i.ibb.co/9tXnRJH/4b5d43f76478d5b3f7db08ab00910522.jpg','https://i.ibb.co/GRPx5zw/0d7ab91adeee52c27cd66e4f0de6d7f0.jpg','https://i.ibb.co/zSjsymB/366798468ac599ae867b915739da7203.jpg','https://i.ibb.co/86q68kV/c2a4dbd2e2d6e146e4c8307274b8b056.jpg','https://i.ibb.co/hXX8BWv/e78f3ed6b344e08125f283f3ec9a7bc8.jpg','https://i.ibb.co/8YyvVSD/6157d48f1075fd89f61ae2b3786da46e.jpg','https://i.ibb.co/HBX034c/6f0b53c3a47dd96153d53dfd2c1ff9cd.jpg','https://i.ibb.co/0qXhxLL/d74062ef206000e3cdc5754ce07628e8.jpg','https://i.ibb.co/Zmpgdcy/c58af906785e1c7aea28e9d33009cf0b.jpg','https://i.ibb.co/fSnxphz/f0e4ce5e98af770df80b2fe748cfcfdf.jpg','https://i.ibb.co/4pk3TrR/4b884577f6ed7ef31ae42c9c04ea8ee9.jpg','https://i.ibb.co/HGLvx1R/81b5db212f981b5e8579008d266a678a.jpg','https://i.ibb.co/XLTzW8q/52606e4d2027bfd63632c80c1a3eb36b.jpg','https://i.ibb.co/VvDXZHT/73a8889695264319a72484db5dcf33c2.jpg','https://i.ibb.co/4J8LHwP/2d5b9921fa8d0b16f72c7720f7a4555b.jpg','https://i.ibb.co/JvytvcM/98bd26ae8a24e5d7a89694b8af622333.jpg','https://i.ibb.co/KDNBHVg/44257da68c87fffdbae3ee2c2750f508.jpg','https://i.ibb.co/m6F0Lkc/8cd48ed0b2a3f37cda1c692f6785b8bf.jpg','https://i.ibb.co/qN0qB8k/aaecc1b43707ad113edeffb322fbfcbb.jpg','https://i.ibb.co/VqnBmHp/c31bd9c3cd454356980098d44f1ebe5f.jpg','https://i.ibb.co/Ph4x7k1/e13cc38d1c79faf1e0b577a8138351e9.jpg','https://i.ibb.co/6R47YqQ/17d927fa6c0d92cd9b7dfbd7baa6b00a.jpg','https://i.ibb.co/LpkLtPK/2525a738838bf3f794f05d6208d02c88.jpg','https://i.ibb.co/JjHLSWx/f933e5cb801857650b951a2e2a973793.jpg','https://i.ibb.co/FJS6bPp/0bfaf7f5ea6b92a19a1a95388185b69f.jpg','https://i.ibb.co/sP0Ys3m/451ff2c4bfc6be73edd5e08cf9ec12fc.jpg','https://i.ibb.co/kXqWyfW/870da6599eab5b5aa787748b2266162f.jpg','https://i.ibb.co/KjCkj7C/956cd79699070de6664de4b98f335050.jpg','https://i.ibb.co/K618LLC/e0732bf02d1a9c1c127c7191b8d51584.jpg','https://i.ibb.co/1sZW76X/ea168dba8ab7cbb939f589f66fefb1b2.jpg']
const aapi = aappi[Math.floor(Math.random() * aappi.length)]
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonsosmiaMessages = {
image: {url:aapi},
caption:  `_Arigameplays_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonsosmiaMessages,{ quoted:cpubli }).catch(err => {
return('_¡Opps, ha ocurrido un error! ;(_')
})
break

case 'chicas':
case 'girls':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
const cappi = ['https://i.ibb.co/X7w1R0P/0b9312cfda11d8eb01bfdab91f01431019.jpg','https://i.ibb.co/pdT2T4x/7c5ceceb0f70de2f518b637d04eb35eb.jpg','https://i.ibb.co/1vcHm1b/c13a19b41edd88d69088f55f73bd7ce1.jpg','https://i.ibb.co/QKGTYYb/62b781bcaaba5d53eb11e5f3de4b14d0.jpg','https://i.ibb.co/X7w1R0P/0b9312cfda11d8eb01bfdab91f01431019.jpg','https://i.ibb.co/tbBL2v8/b08fd6521b56934a51a23bb334cb2f17.jpg','https://i.ibb.co/vc6SpMS/d534c742180e431351649414804143f3.jpg','https://i.ibb.co/RpxDNcP/2c7d7aaffa9e1298a593221b36ef70c4.jpg','https://i.ibb.co/LQGLYSn/f6a05cfd68995124b03d88765d50e1a3.jpg','https://i.ibb.co/m8b4SXP/5406365a590efd13b573fd5ccb59d5ef.jpg','https://i.ibb.co/X7w1R0P/0b9312cfda11d8eb01bfdab91f01431019.jpg','https://i.ibb.co/tJSYt8n/fbbfe61d8a76ca71bd2d4602d01b08ab.jpg','https://i.ibb.co/JFrG7XQ/d3398420127740e8579b5044e2e14940.jpg','https://i.ibb.co/jLFmn7j/d5cd73d5ed220e8a9d195fd465bc2cec.jpg','https://i.ibb.co/54jVvz5/df3e7e6bb8f91665fa636ec75f02406d.jpg','https://i.ibb.co/NYVnxPj/df1e5264ad9104aadea399ae677899ec.jpg','https://i.ibb.co/2F9LRH5/64d3e0da8143c3092680a913da851c7e.jpg','https://i.ibb.co/YXLw5rh/f47f18a47562646d0f3a57568492ae08.jpg','https://i.ibb.co/qJK9yLj/4ec6a2536f46b4585ddc5e37cfcd5123.jpg','https://i.ibb.co/XCqH2ck/aef0d698c9a543463584b7d2ac235037.jpg','https://i.ibb.co/X7w1R0P/0b9312cfda11d8eb01bfdab91f01431019.jpg','https://i.ibb.co/G30CqpL/e7a97d15d3324fa12706dc8613262a2b.jpg','https://i.ibb.co/Dgq2T87/eefa2549a0ff340d8eff9005d948e23a.jpg','https://i.ibb.co/5WKqqtJ/ed7f3e73d062bb0109e2a7565f7ca0d5.jpg','https://i.ibb.co/tJCdJqM/7788fd2f8ade0c1f8a59796375f36086.jpg','https://i.ibb.co/dK6rvy9/9d0a7c3a98499b78e47aca0dfb8af9db.jpg','https://i.ibb.co/9Tdb6T5/e378c273aacde4c93bfc28e68aab4d03.jpg','https://i.ibb.co/WzHCSy3/00f62ca627e8992208bb30f359654c55.jpg','https://i.ibb.co/C0ZqWJk/89e1f64823d9ef57f446ff8dda1b3515.jpg','https://i.ibb.co/YRX4cNc/294713f05aa3999db542caaccee31987.jpg','https://i.ibb.co/zmy7xmc/eed27497c23578161034e26b99a45dbc.jpg','https://i.ibb.co/PGKKyRZ/02cb5c8d503ca25acb622863997d202e.jpg','https://i.ibb.co/3hysF4G/6c6fce3846b27289ebe2173385ab13c5.jpg','https://i.ibb.co/1qysRxx/edc4c8248c2522e56fef9265d136c39f.jpg','https://i.ibb.co/HgS6Sgk/6c6d790d3227217357d0814bb28066f5.jpg','https://i.ibb.co/6r7X5Ds/2385b5a3610210f47449dfdf24ad67e5.jpg','https://i.ibb.co/qNW03KK/a7292a8c64fd5c5628aff225debebbad.jpg','https://i.ibb.co/HDfvgML/714f552aec70fd79ed0b4c68cb8e73e5.jpg','https://i.ibb.co/99rJT44/c0b5b89dd24cecd83261b710b503a6a9.jpg','https://i.ibb.co/cN9wyfs/156483dcd2e9869a06c8b34ba2477d53.jpg','https://i.ibb.co/smMhLww/97984aef1a22f17804b964f498d736ca.jpg','https://i.ibb.co/nP6m20J/10b0db857f134c50fe057d3813174960.jpg','https://i.ibb.co/z298YNc/7e97f2f041887e6a9433a1d99b265d0b.jpg','https://i.ibb.co/DgMVC6k/d5d57f82e2b957a9b042ee51a55eafc8.jpg','https://i.ibb.co/yB2dXrM/ed8255e587876a260b0eedfa406c2a32.jpg','https://i.ibb.co/pWyGSmP/ccb6afcfc2b70e029b7ee6c5b824ea8f.jpg','https://i.ibb.co/D1q3mQz/18c52b958ed3d9ef6be8d836ae95df1f.jpg','https://i.ibb.co/gwmDwcG/2af15b7b80de5678b3c5060cae54d15e.jpg','https://i.ibb.co/ZfKK2S8/4b5f689569d8e47b712f92993eaf6cdb.jpg','https://i.ibb.co/x2V6SBW/7201282cfad651c3a0d42f81f232fe9c.jpg','https://i.ibb.co/GWHz5wY/9bf37d6c89b4fd07007306debd21a49a.jpg','https://i.ibb.co/fQPsKk5/b5ca0588564dfc09ce7cad0e41a11657.jpg','https://i.ibb.co/C9qS3Pm/0835624bf9816ad33372b681b8c395ec.jpg','https://i.ibb.co/TmPmRGD/c75799dac3beb182d6f6de631da40344.jpg','https://i.ibb.co/TrtkmmX/eb5f44c707a8e8bf7c39df683cf06fa2.jpg','https://i.ibb.co/QpCVrgt/52e633d6e73fe9544262b2ee62f02ca1.jpg','https://i.ibb.co/zRfzb50/47868ae5d1357c6a554dadc8e8ecb7f4.jpg','https://i.ibb.co/frX3f4Z/98b198c3a84588a71c7a6aec334ede8c.jpg','https://i.ibb.co/HgVYnx7/d5346c3e71135345f7aa9729fe491201.jpg','https://i.ibb.co/FD9dwf3/9542669046a90d061e387438d8b61e47.jpg','https://i.ibb.co/ft3CvQ6/c232223d1a4fafdd644cbc5e3d81185d.jpg','https://i.ibb.co/k3JtqFt/90a591dfdb1d1cf4881b4f6511a58771.jpg','https://i.ibb.co/GQR0SwV/ea80bbf0deaa9447164f5309e0583692.jpg','https://i.ibb.co/5kz4jg6/c11f093169cbafe36ee78d55eeaa40e6.jpg','https://i.ibb.co/JQMfYsv/8c23e71b98441ad6514a0ca3020b5df0.jpg','https://i.ibb.co/LRdSkZw/acdac723300bd1e66487dc5d9c1d4e1a.jpg','https://i.ibb.co/VVpK6kh/bb6a045c95ca977df5bbd7cb55f497bc.jpg','https://i.ibb.co/McjKfHQ/dcf349ea4a06404bb2f8e6d6bb5c03da.jpg','https://i.ibb.co/hgM3Zrh/fcc00fc612920988e9a57433a50ea6a6.jpg','https://i.ibb.co/jwsW7CZ/fd53811402c385c67eea3dd514ccdaca.jpg','https://i.ibb.co/BfkZq4c/05a5a1813829b8e718c73a09ee9686fd.jpg','https://i.ibb.co/L9TqL9c/e4a11333437f8ce9216df7e5d9c59bdc.jpg','https://i.ibb.co/g3nYrN0/c905e0a2eb42af0378681755edb2a1ea.jpg','https://i.ibb.co/sRyKQyx/1b69e061d89f496a8c9f8181458a38e7.jpg','https://i.ibb.co/xq8xgKV/7ee058d71d82df89ea2bdefdfe592bb7.jpg','https://i.ibb.co/kDCb6DY/db98b6872b4193a527bbc8b71324c5d6.jpg','https://i.ibb.co/n7stXM0/2e03de770489d10baa838f26da7bc814.jpg','https://i.ibb.co/swpB3PJ/2ecdea57af612946ed8e541beab6ad96.jpg','https://i.ibb.co/TwLsWx2/ec77ac5081c93d99a208eb778c4419c6.jpg','https://i.ibb.co/DKR0M0b/1a212f002624d731f3b1490875aa3904.jpg','https://i.ibb.co/QkLj7Qx/6db15265b5e7a6d6d9c11410120d8b41.jpg','https://i.ibb.co/VmyptDb/8338dd00321991b05c2f89e694434860.jpg','https://i.ibb.co/gSNFP2p/910e71f5a2ba4413abb1f2a4dfc692f7.jpg','https://i.ibb.co/yqrPSt8/b23ad577c955aab007d588cfa8764898.jpg','https://i.ibb.co/6tKqxzz/cfb238830ae671d18cbd41c8c03609aa.jpg','https://i.ibb.co/7QwL4kJ/f5ab650a8a989e3f7e1954f78ccdb684.jpg']
const capi = cappi[Math.floor(Math.random() * cappi.length)]
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonsosqueMessages = {
image: {url:capi},
caption:  `_Chicas_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonsosqueMessages,{ quoted:cpubli }).catch(err => {
return('¡Opps, ha ocurrido un error!_ ;(')
})
break

case 'perrito':
case 'perro':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
anu = await fetchJson(`https://some-random-api.ml/animal/dog`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonsosqueuMessages = {
image: {url:anu.image},
caption:  `_Perrito_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonsosqueuMessages,{ quoted:cpubli }).catch(err => {
return('¡Opps, ha ocurrido un error!_ ;(')
})
break

case 'michi':
case 'gato':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
anu = await fetchJson(`https://some-random-api.ml/animal/cat`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonsosqueuasMessages = {
image: {url:anu.image},
caption:  `_Michi_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonsosqueuasMessages,{ quoted:cpubli }).catch(err => {
return('¡Opps, ha ocurrido un error!_ ;(')
})
break

case 'pandita':
case 'panda':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
anu = await fetchJson(`https://some-random-api.ml/animal/panda`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonrandom1Messages = {
image: {url:anu.image},
caption:  `_Pandita_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonrandom1Messages,{ quoted:cpubli }).catch(err => {
return('¡Opps, ha ocurrido un error!_ ;(')
})
break

case 'zorrito':
case 'zorro':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
anu = await fetchJson(`https://some-random-api.ml/animal/fox`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonrandom2Messages = {
image: {url:anu.image},
caption:  `_Zorrito_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonrandom2Messages,{ quoted:cpubli }).catch(err => {
return('¡Opps, ha ocurrido un error!_ ;(')
})
break

case 'panditarojo':
case 'pandarojo':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
anu = await fetchJson(`https://some-random-api.ml/animal/red_panda`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonrandom3Messages = {
image: {url:anu.image},
caption:  `_Pandita Rojo_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonrandom3Messages,{ quoted:cpubli }).catch(err => {
return('¡Opps, ha ocurrido un error!_ ;(')
})
break

case 'koalita':
case 'koala':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
anu = await fetchJson(`https://some-random-api.ml/animal/koala`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonrandom4Messages = {
image: {url:anu.image},
caption:  `_Koalita_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonrandom4Messages,{ quoted:cpubli }).catch(err => {
return('¡Opps, ha ocurrido un error!_ ;(')
})
break

case 'parajito':
case 'pajaro':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
anu = await fetchJson(`https://some-random-api.ml/animal/bird`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonrandom5Messages = {
image: {url:anu.image},
caption:  `_Pajarito_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonrandom5Messages,{ quoted:cpubli }).catch(err => {
return('¡Opps, ha ocurrido un error!_ ;(')
})
break

//Menu Efectos 🖼️ EM1
case 'hornylc': {
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!/image/.test(mime)) return reply(`_Envie o responde a una imagen con el comando_ *_‟${prefix + command}”_*`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
let media = await walle.downloadAndSaveMediaMessage(quoted)               
let anu = await TelegraPh(media)
let buf = await getBuffer(`https://zenzapis.xyz/photoeditor/horny?url=${anu}&apikey=${zenapi}`)
walle.sendMessage(m.chat, { image: buf, caption: `${botname}` }, { quoted: cpubli}).catch ((err) => reply(answer.error))
}
break

case 'sepia': {
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!/image/.test(mime)) return reply(`_Envie o responde a una imagen con el comando_ *_‟${prefix + command}”_*`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
let media = await walle.downloadAndSaveMediaMessage(quoted)               
let anu = await TelegraPh(media)
let buf = await getBuffer(`https://zenzapis.xyz/photoeditor/sepia?url=${anu}&apikey=${zenapi}`)
walle.sendMessage(m.chat, { image: buf, caption: `${botname}` }, { quoted: cpubli}).catch ((err) => reply(answer.error))
}
break

case 'borroso': {
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!/image/.test(mime)) return reply(`_Envie o responde a una imagen con el comando_ *_‟${prefix + command}”_*`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
let media = await walle.downloadAndSaveMediaMessage(quoted)               
let anu = await TelegraPh(media)
let buf = await getBuffer(`https://zenzapis.xyz/photoeditor/pixelate?url=${anu}&apikey=${zenapi}`)
walle.sendMessage(m.chat, { image: buf, caption: `${botname}` }, { quoted: cpubli}).catch ((err) => reply(answer.error))
}
break

case 'gtavmuerto': {
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!/image/.test(mime)) return reply(`_Envie o responde a una imagen con el comando_ *_‟${prefix + command}”_*`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
let media = await walle.downloadAndSaveMediaMessage(quoted)               
let anu = await TelegraPh(media)
let buf = await getBuffer(`https://zenzapis.xyz/photoeditor/wasted?url=${anu}&apikey=${zenapi}`)
walle.sendMessage(m.chat, { image: buf, caption: `${botname}` }, { quoted: cpubli}).catch ((err) => reply(answer.error))
}
break

case 'cartel': {
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!/image/.test(mime)) return reply(`_Envie o responde a una imagen con el comando_ *_‟${prefix + command}”_*`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
let media = await walle.downloadAndSaveMediaMessage(quoted)               
let anu = await TelegraPh(media)
let buf = await getBuffer(`https://zenzapis.xyz/photoeditor/wanted?url=${anu}&apikey=${zenapi}`)
walle.sendMessage(m.chat, { image: buf, caption: `${botname}` }, { quoted: cpubli}).catch ((err) => reply(answer.error))
}
break

case 'apuntando': {
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!/image/.test(mime)) return reply(`_Envie o responde a una imagen con el comando_ *_‟${prefix + command}”_*`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
let media = await walle.downloadAndSaveMediaMessage(quoted)               
let anu = await TelegraPh(media)
let buf = await getBuffer(`https://zenzapis.xyz/photoeditor/gun?url=${anu}&apikey=${zenapi}`)
walle.sendMessage(m.chat, { image: buf, caption: `${botname}` }, { quoted: cpubli}).catch ((err) => reply(answer.error))
}
break

case 'gtavmision': {
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!/image/.test(mime)) return reply(`_Envie o responde a una imagen con el comando_ *_‟${prefix + command}”_*`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
let media = await walle.downloadAndSaveMediaMessage(quoted)               
let anu = await TelegraPh(media)
let buf = await getBuffer(`https://zenzapis.xyz/photoeditor/passed?url=${anu}&apikey=${zenapi}`)
walle.sendMessage(m.chat, { image: buf, caption: `${botname}` }, { quoted: cpubli}).catch ((err) => reply(answer.error))
}
break

case 'encarcelado': {
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!/image/.test(mime)) return reply(`_Envie o responde a una imagen con el comando_ *_‟${prefix + command}”_*`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
let media = await walle.downloadAndSaveMediaMessage(quoted)               
let anu = await TelegraPh(media)
let buf = await getBuffer(`https://zenzapis.xyz/photoeditor/jail?url=${anu}&apikey=${zenapi}`)
walle.sendMessage(m.chat, { image: buf, caption: `${botname}` }, { quoted: cpubli}).catch ((err) => reply(answer.error))
}
break

//Menu Stickers 🖼️
case 'emoji': {
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!args.join(" ")) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} 🤑“_*`)
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await walle.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `${global.botname}`}, {quoted:cpubli})
await walle.sendMessage(from, {text:`_Responda a esta imagen con *_‟${prefix}sticker“ para convertir a sticker._*`}, {quoted:cpubli})
})
}
break

case 'stickerp': 
case 'sp': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!args.join(" ")) return reply(`_Ejemplo de uso:_ *_‟${global.author}|${global.packname}”_* _para hacer un sticker con etiquetas personalizadas_`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
walle.downloadAndSaveMediaMessage(quoted, "gifee")
walle.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:cpubli})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await walle.sendImageAsSticker(m.chat, media, cpubli, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('_¡Hey, recorte su video a *_‟10”_* segundos!_')
let media = await quoted.download()
let encmedia = await walle.sendVideoAsSticker(m.chat, media, cpubli, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`_Envie o responde a una imagen/video/gif con el comando_ *_‟${prefix + command}”_*`)
}
}
break

case 'smeme': 
case 'stikermeme': 
case 'stickermeme': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`_Envie una imagen/gif con el comando_ *_‟${prefix + command} Walle”_*`)
if (text.includes('|')) return reply(`_Envie una imagen/gif con el comando_ *_‟${prefix + command} Walle”_`)
if (!/image/.test(mime)) return reply(`_Envie una imagen/gif con el comando_ *_‟${prefix + command} Walle”_`)
mee = await walle.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await walle.sendImageAsSticker(m.chat, meme, cpubli, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break

case 'mix':
case 'emojimix': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!q) reply(`_Ejemplo de uso:_ *_‟${prefix + command} 😡+🤣”_*`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await walle.sendImageAsSticker(from, res.url, cpubli, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break

case 'attp2': {
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle”_*`)
await walle.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, m, {asSticker: true})
}
break

case 'attp': {
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!text) reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle”_*` )
await walle.sendMedia(m.chat, `https://zenzapis.xyz/creator/attp?text=${text}&apikey=${zenapi}`, cpubli, {asSticker: true}).catch((err) => reply(answer.error))
}
break

case 'ttp': {
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle”_*`)
await walle.sendMedia(m.chat, `https://zenzapis.xyz/creator/ttp?text=${text}&apikey=${zenapi}`, cpubli, {asSticker: true})
}
break

case 'stick':
case 'stiker': 
case 'sticker': 
case 's': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await walle.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('_¡Hey, recorte su video a *_‟10” segundos!_')
let media = await quoted.download()
let encmedia = await walle.sendVideoAsSticker(m.chat, media, cpubli, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`_Envie o responda a una imagen/video/gif con el comando_ *_‟${prefix + command}”_*`)
}
}
break

//Menu Herramientas 🛠️
case 'ssweb':
case 'fotoweb':
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} https://github.com/Saidemx“_*`)
anussweb = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`)
buff = await getBuffer(anussweb.screenshot)
walle.sendMessage(from, {image: buff, quoted: cpubli, caption: 'WalleBot - MD'})
break

case 'sswebcel':
case 'fotowebcel':
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} https://github.com/Saidemx“_*`)
walle.sendMessage(from, {image: {url: `https://api.nxr.my.id/api/sshp?url=${text}&apikey=${nxrapi}`}, quoted: m, caption: 'WalleBot - MD'})
break

case 'remove': 
case 'delete':
case 'borrar':
case 'eliminar':
case 'd': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!m.quoted) return
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return reply('_¡El mensaje no fue enviado por mi!_')
walle.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break

case 'tts':
case 'gtts':
const gtts = require('./lib/gtts')(args[0])
if (!m.isGroup) return reply(answer.group) 
if (!text) return reply(`_Ejenplo de uso:_ *_‟${prefix + command} es Hola”_*`)
if (args.length < 1) return walle.sendMessage(from, '', text, {quoted: m})
if (args.length < 2) return walle.sendMessage(from, '', text, {quoted: m})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 250
? reply('_¡El límite de caracteres/letras es de *‟250”*!_')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
walle.sendMessage(m.chat, {audio: buffer, mimetype:'audio/mpeg', ptt:true }, {quoted:cpubli})
fs.unlinkSync(rano)
})
})
break

case 'survey':
case 'encuesta': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (m.chat in vote) return reply(`_Opps, ya hay una encuesta en este chat!, si desea terminar la encuesta use *‟${prefix}endsurvey”*_`)
if (!args.join(" ")) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} ¿Sacamos a WalleBot?“_*`)
vote[m.chat] = [args.join(" "), [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = ` *⎾ <E N C U E S T A/> ⏌*\n\n ✘ _TEMA:_ *${vote[m.chat][0]}* ⚠️\n

⎾ *SI* 

 _Total:_ *${vote[m.chat][1].length}* ⏌

⎾ *NO* 

 _Total:_ *${vote[m.chat][2].length}* ⏌`
let buttonsVote = [
{buttonId: `${prefix}votarsi`, buttonText: {displayText: 'SI ✳️'}, type: 1},
{buttonId: `${prefix}votarno`, buttonText: {displayText: 'NO ❌'}, type: 1},
{buttonId: `${prefix}endsurvey`, buttonText: {displayText: 'TERMINAR ENCUESTA 🗑️'}, type: 1},
]

let buttonMessageVote = {
image: thumb,
jpegThumbnail: thumb,
caption: teks_vote,
footer: `${global.botname}`,
buttons: buttonsVote,
headerType: 1
}
walle.sendMessage(m.chat, buttonMessageVote)
}
break

case 'votarsi': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!(m.chat in vote)) return reply(`_¡Opps, parece que no hay una encuesta activa en este grupo!_`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return reply(`_¡Ya has votado!_`)
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = ` *⎾ <E N C U E S T A/> ⏌*\n\n ✘ _TEMA:_ *${vote[m.chat][0]}* ⚠️\n

⎾ *SI* 

 _Total:_ *${vote[m.chat][1].length}*
${vote[m.chat][1].map((v, i) => ` *⋄ ${i + 1}. @${v.split`@`[0]}* ⏌`).join('\n')} 

⎾ *NO* 

 _Total:_ *${vote[m.chat][2].length}*
${vote[m.chat][2].map((v, i) => ` ⋄ *${i + 1}. @${v.split`@`[0]}* ⏌`).join('\n')} `
let buttonsVote = [
{buttonId: `${prefix}votarsi`, buttonText: {displayText: 'SI ✳️'}, type: 1},
{buttonId: `${prefix}votarno`, buttonText: {displayText: 'NO ❌'}, type: 1},
{buttonId: `${prefix}endsurvey`, buttonText: {displayText: 'TERMINAR ENCUESTA 🗑️'}, type: 1},
]

let buttonMessageUpvote = {
image: thumb,
jpegThumbnail: thumb,
caption: teks_vote,
footer: `${global.botname}`,
buttons: buttonsVote,
headerType: 1,
mentions: menvote
}
walle.sendMessage(m.chat, buttonMessageUpvote)
}
break

case 'votarno': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!(m.chat in vote)) return reply(`_¡Opps, parece que no hay una encuesta activa en este grupo!_`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return reply(`_¡Ya has votado!_`)
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = ` *⎾ E N C U E S T A ⏌*\n\n ✘ _TEMA:_ *${vote[m.chat][0]}* ⚠️\n

⎾ *SI* 

 _Total:_ *${vote[m.chat][1].length}*
${vote[m.chat][1].map((v, i) => ` *⋄ ${i + 1}. @${v.split`@`[0]}* ⏌`).join('\n')} 

⎾ *NO* 

 _Total:_ *${vote[m.chat][2].length}*
${vote[m.chat][2].map((v, i) => ` ⋄ *${i + 1}. @${v.split`@`[0]}* ⏌`).join('\n')} `
let buttonsVote = [
{buttonId: `${prefix}votarsi`, buttonText: {displayText: 'SI ✳️'}, type: 1},
{buttonId: `${prefix}votarno`, buttonText: {displayText: 'NO ❌'}, type: 1},
{buttonId: `${prefix}endsurvey`, buttonText: {displayText: 'TERMINAR ENCUESTA 🗑️'}, type: 1},
]

let buttonMessageDevote = {
image: thumb,
jpegThumbnail: thumb,
caption: teks_vote,
footer: `${global.botname}`,
buttons: buttonsVote,
headerType: 1,
mentions: menvote
}
walle.sendMessage(m.chat, buttonMessageDevote)
}
break

case 'endsurvey': 
case 'terminarvotos': 
case 'hapusvote': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!(m.chat in vote)) return reply(`_¡Opps, parece que no hay una encuesta activa en este grupo!_`)
delete vote[m.chat]
reply('_Ok, Encuesta eliminada con éxito :D_')
}
break

case 'listchats':
case 'listachats': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `*「 <CHATS PRIVADOS/> 」*\n\n_Existen:_ *_${anu.length}_* _usuarios que usan a *WalleBot* en chat privado._`
for (let i of anu) {
 teks += `\n\n_Perfil:_ *_@${i.id.split('@')[0]}_*\n_Chat:_ *_${i.unreadCount}_*\n_Último chat:_ *_${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}_*`
}
walle.sendTextWithMentions(m.chat, teks, cpubli)
}
break

case 'listgroups':
case 'listagrupos': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*「 <GRUPOS/> 」*\n\n_Existen:_ *_${anu.length}_* _usuarios que usan a *WalleBot* en grupos._`
for (let i of anu) {
 let metadata = await walle.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\n_Nombre:_ *_${metadata.subject ? metadata.subject : "undefined"}_*\n_Dueño:_ *_${loldd ? '@' + loldd.split("@")[0] : "undefined"}_*\n_Id:_ *_${metadata.id ? metadata.id : "undefined"}_*\n_Fecha De Registro:_ *_${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}_*\n_Miembros:_ *_${metadata.participants.length ? metadata.participants.length : "undefined"}_*`
}
walle.sendTextWithMentions(m.chat, teks, cpubli)
}
break

case 'volteartexto':
case 'fliptext': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (args.length < 1) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle”_*`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`*「 <FLIP/> 」*\n•> _Normal:_ *_${quere}_*\n•> _Flip:_ *_${flipe}_*`)
}
break
 
case 'petición':
case 'peticion': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!args.join(" ")) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Hola porfavor añade mas cosas en el menu descargas.”_*`)
teks = `*PETICIÓN*`
teks1 = `\n\n_Numero:_ *_@${m.sender.split("@")[0]}_*\n_Peticion:_ *_${args.join(" ")}_*`
teks2 = `\n\n_Se ha enviado con éxito al Desarollador._`
for (let i of owner) {
walle.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:cpubli})
}
walle.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:cpubli})
}
break

case 'report':
case 'reporte': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!args.join(" ")) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Hey hay un usuario en el grupo WALLE que esta espameando.”_*`)
teks = `*REPORTE*`
teks1 = `\n\n_Numero:_ *_@${m.sender.split("@")[0]}_*\n_Reporte:_ *_${args.join(" ")}_*`
teks2 = `\n\n_Enviado con éxito al Desarollador._`
for (let i of owner) {
walle.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:cpubli})
}
walle.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:cpubli})
}
break

case 'mensajeinfo':
case 'chatinfo': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!m.quoted) reply('_Responde un mensaje enviado por mi <3_')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return reply('_¡El mensaje no fue enviado por mi! :C_')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `_- Nombre:_ *_@${i.userJid.split('@')[0]}_*\n`
teks += ` ┗━- _Hora:_ *_${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}_* - _Estado:_ *_${read ? 'Leido' : 'No Leido'}_*\n\n`
}
walle.sendTextWithMentions(m.chat, teks, cpubli)
}
break

case 'unirse':
case 'join': {
if (!isPremium) return reply(answer.premium)
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!args[0]) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} https://chat.whatsapp.com/He9uYjcDsQPBYmlHmfdVpk“_*`)
vdd = args[0]
let vcc = vdd.split("https://chat.whatsapp.com/")[1]
if (!vcc) return reply("_Opps, link invalido_ :/")
if (isCreator) {
await walle.groupAcceptInvite(vcc).then(async(res) => reply(jsonformat(res))).catch(_ => _)
reply("_¡Ok, solicitud realizada!_")
} else {
walle.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: vcc } }]
}).then(async(res) => {
sizny = res.content[0].attrs.size
if (sizny < 1) {
teks = `_Lo siento los miembros de su grupo son muy pocos el mínimo de participantes es de 30, pero puedes unirte a mi grupo_ ;)`
sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./media/imagenes/walle.jpg'), `${global.botname}`, "916909137213@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "1")
} else if (sizny > 2) {
await walle.groupAcceptInvite(vcc).then(async(res) => reply(jsonformat(res))).catch(_ => _)
reply("_¡Ok, solicitud realizada!_")
} else {
reply("_Opps, ha ocurrido un error_ ;(")
}
}).catch(_ => _)
}
}
break

case 'p':
case 'ping': 
case 'botstatus': 
case 'statusbot': {
if (!m.isGroup) return reply(answer.group) 
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
teks = `*「 <VPS INFORMACIÓN/> 」*\n\n🌡️ _Memoria Ram:_\n*_${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}_*\n\n🌐 _NodeJS Memoria:_\n${Object.keys(used).map((key, _, arr) => `*_${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}_*`).join('\n')}\n\n*「 <BOT INFORMACIÓN/> 」*\n\n🚅 _Velocidad De Respuesta:_\n*_${latensi.toFixed(4)}_* *_Segundos_*\n\n⏱️ _Tiempo En Servicio:_\n*_${runtime(process.uptime())}_*`.trim()
sendOrder(m.chat, teks, "391028153034238", fs.readFileSync('./media/imagenes/walle.jpg'), `${global.botname}`, `${global.botname}`, "916909137213@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "1")
}
break

case 'owner':
case 'creator':
case 'dueño':
case 'creador':
case 'desarollador':
case 'creadorcontacto': {
walle.sendContact(m.chat, global.owner, cpubli)
}
break

/*case 'owner':
case 'creator':
case 'dueño':
case 'creador':
case 'desarollador':
if (!m.isGroup) return reply(answer.group) 
var unicornio = await getBuffer(picak)
await walle.send5ButImg(from, `*ꪶ DESARROLLADOR ꫂ*\n\n*- Mi Nombre:* _Cesar "Mito/Saidemx"_\n*- Mi Edad:* _15 Añitos_\n*- Pais:* _Mexico (ya se que lleva acento)_\n*- Mi Numero:* _wa.me/5215621341581_\n*- Mi Github:* _Https://github.com/saidemx_\n\n_Gracias por usar WalleBot ;), si deseas apoyarme económicamente presiona el boton Apoyar 🗃️ y si no tienes dinero pero igual quieres ayudar sigueme en YouTube o dejame una estrellita en Github me ayudarias muchísimo, cuidate:)._` + '' + ' ', `${botname}`,unicornio, [{"urlButton": {"displayText": "YouTube 🔎","url": `${ytlink}`}},{"quickReplyButton": {"displayText": "Apoyar 🗃️","id": 'apoyar'}},{"quickReplyButton": {"displayText": "Contactar 👤","id": 'creadorcontacto'}}] )
break*/

case 'mitoyeni':
case 'yenimito':
case 'mitoyyeni':
case 'ym':
case 'yeniymito':
case 'my': {
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
teks = `*「 <YENI & MITO X SIEMPRE/> 」*`
let buttons = [
{buttonId: `l`, buttonText: {displayText: 'Obviooo 💕'}, type: 1}
]
let buttonMessage = {
image: fs.readFileSync("media/imagenes/ym.jpg"),
jpegThumbnail: fs.readFileSync("media/imagenes/ym.jpg"),
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Ola :3",
body: "¡Ola d mar :3!", 
thumbnail: fs.readFileSync("media/imagenes/ym.jpg"),
mediaType:1,
mediaUrl: '',
sourceUrl: ""
}}
}
walle.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break

//Menu Convertidores ♈
case 'toimage': 
case 'toimg': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!m.quoted) return reply(`_Envia o responde a un sticker con el comando_ *_‟${prefix + command}”_*`)
if (!/webp/.test(mime)) return reply(`_Envia o responde a un sticker con el comando_ *_‟${prefix + command}”_*`)
let media = await walle.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
walle.sendMessage(m.chat, { image: buffer }, { quoted: cpubli})
fs.unlinkSync(ran)
})
}
break

case 'togif': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!m.quoted) return reply(`_Responde a un sticker (en movimiento) con el comando_ *_‟${prefix + command}”_*`)
if (!/webp/.test(mime)) return reply(`_Responde a un sticker (en movimiento) con el comando_ *_‟${prefix + command}”_*`)
let { webp2mp4File } = require('./lib/uploader')
let media = await walle.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await walle.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'WalleBot - MD' }, gifPlayback: true }, { quoted: cpubli })
await fs.unlinkSync(media)
}
break

case 'tourl': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await walle.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break

case 'tomp3': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (/document/.test(mime)) return reply(` *${prefix + command}*`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`_Responde a un audio/video con el comando_ *_‟${prefix + command}”_*`)
if (!m.quoted) return reply(`_Responde a un audio/video con el comando_ *_‟${prefix + command}”_*`)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
walle.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${walle.user.name} (${m.id}).mp3`}, { quoted : cpubli })
}
break

case 'volumen': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!args.join(" ")) return reply(`_Responde a un video/audio/nota de voz con el comando_ *_‟${prefix + command} 10“_* _para aumentar el volumen del audio la cifra *‟10”* puede ser modoficada segun el volumen deseado :D_`)
media = await walle.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('_¡Opps, ha ocurrido un error! ;(')
jadie = fs.readFileSync(rname)
walle.sendMessage(from, {audio:jadie, mimetype: 'audio/mpeg', ptt: true}, {quoted: cpubli})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('_¡Opps, ha ocurrido un error! ;(')
jadie = fs.readFileSync(rname)
walle.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: cpubli})
fs.unlinkSync(rname)
})
} else {
reply(`_Responde a un audio/nota de voz con el comando_ *_‟${prefix + command} 10“_* _para aumentar el volumen del audio la cifra *‟10”* puede ser modoficada segun el volumen deseado :D_`)
}
}
break

case 'duración': 
case 'duracion': {
if (isBannedUser) return reply(answer.banneduser)
if (!args.join(" ")) return reply(`_Responde a un video/audio/nota de voz con el comando_ *_‟${prefix + command} 10“_* _para aumentar la duración del audio la cifra *‟10”* puede ser modoficada segun la duración deseada :D_`)
var req = args.join(' ')
media = await walle.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('_¡Opps, ha ocurrido un error! ;(')
hah = fs.readFileSync(ran)
walle.sendMessage(from, {audio:hah, mimetype:'audio/mpeg', ptt:true}, {quoted:cpubli})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('_¡Opps, ha ocurrido un error! ;(')
hah = fs.readFileSync(ran)
walle.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:cpubli})
fs.unlinkSync(ran)
})
} else {
reply(`_Responde a un audio/nota de voz con el comando_ *_‟${prefix + command} 10“_* _para aumentar la duración del audio la cifra *‟10”* puede ser modoficada segun la duración deseada :D_`)
}
}
break

case 'bass': 
case 'blown': 
case 'deep': 
case 'earrape': 
case 'fast': 
case 'fat': 
case 'nightcore': 
case 'reverse': 
case 'robot': 
case 'slow': 
case 'smooth': 
case 'tupai':
try {
if (!m.isGroup) return reply(answer.group) 
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await walle.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(err)
let buff = fs.readFileSync(ran)
walle.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else reply(`_Responde a una nota de voz o audio con el comando_ *_‟${prefix + command}”_*`)
} catch (e) {
reply(e)
}
break

//Menu Audios 🗣️
case 'adiosaudio':
const devsound1 = fs.readFileSync('./media/audio/adiosputa.mp3')
walle.sendMessage(m.chat, { audio: devsound1, mimetype: 'audio/mpeg', ptt: true}, { quoted : m })
break

case 'sexop':
const devsound2 = fs.readFileSync('./media/audio/sexo.mp3')
walle.sendMessage(m.chat, { audio: devsound2, mimetype: 'audio/mpeg', ptt: true}, { quoted : m })
break

case 'musiquita':
const devsound3 = fs.readFileSync('./media/audios/musiquita.mp3')
walle.sendMessage(m.chat, { audio: devsound3, mimetype: 'audio/mpeg', ptt: true}, { quoted : m })

break

case 'dbienvenido':
const devsound4 = fs.readFileSync('./media/audios/bienvenido.mp3')
walle.sendMessage(m.chat, { audio: devsound4, mimetype: 'audio/mpeg', ptt: true}, { quoted : cinv })
walle.sendMessage(m.chat, {sticker: fs.readFileSync('./media/stickers/bienvenido.webp'), contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:cinv})
break

case 'getdesc':
reply(`${groupMetadata.desc}`)
break

//Menu Logos ©️
case 'cat':
case 'window':
case 'catwindow':
if(!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle”_*`)
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
walle.sendMessage(m.chat, { image: { url: `https://zenzapis.xyz/ephoto/glass?text=${text}&apikey=${zenapi}` }, caption: `${global.botname}` }, { quoted: cpubli })
break

case 'girl':
case 'girlwindow':
case 'windowgirl':
if(!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle”_*`)
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
walle.sendMessage(m.chat, { image: { url: `https://api.zeeoneofc.xyz/api/ephoto360/textonglass?text=${text}&text2=ofc&apikey=dvZmQA9G` }, caption: `${global.botname}` }, { quoted: cpubli })
break

case 'freefire':
case 'banner':
case 'ffbanner':
if(!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle”_*`)
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
walle.sendMessage(m.chat, { image: { url: `https://zenzapis.xyz/ephoto/ffcover?text=${text}&apikey=${zenapi}` }, caption: `${global.botname}` }, { quoted: cpubli })
break

case 'blackpink':
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle“_*`)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [`${q}`,])
.then((data) => walle.sendMessage(m.chat, { image: { url: data }, caption: `${global.botname}` }, { quoted: cpubli }))
.catch((err) => console.log(err));
break

case 'batman':
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle“_*`)
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [`${q}`,])
.then((data) => walle.sendMessage(m.chat, { image: { url: data }, caption: `${global.botname}` }, { quoted: cpubli }))
.catch((err) => console.log(err));
break

case 'thunder':
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle“_*`)
maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [`${q}`,])
.then((data) => walle.sendMessage(m.chat, { image: { url: data }, caption: `${global.botname}` }, { quoted: cpubli }))
.catch((err) => console.log(err));
break

case 'harrypotter':
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle“_*`)
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [`${q}`,])
.then((data) => walle.sendMessage(m.chat, { image: { url: data }, caption: `${global.botname}` }, { quoted: cpubli }))
.catch((err) => console.log(err));
break

case 'underwater':
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle“_*`)
maker.textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [`${q}`,])
.then((data) => walle.sendMessage(m.chat, { image: { url: data }, caption: `${global.botname}` }, { quoted: cpubli }))
.catch((err) => console.log(err));
break

case 'neon':
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle“_*`)
maker.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", [`${q}`,])
.then((data) => walle.sendMessage(m.chat, { image: { url: data }, caption: `${global.botname}` }, { quoted: cpubli }))
.catch((err) => console.log(err));
break

case 'vintage':
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle“_*`)
maker.textpro("https://textpro.me/1917-style-text-effect-online-980.html", [`${q}`,])
.then((data) => walle.sendMessage(m.chat, { image: { url: data }, caption: `${global.botname}` }, { quoted: cpubli }))
.catch((err) => console.log(err));
break

case 'firework':
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle“_*`)
maker.textpro("https://textpro.me/firework-sparkle-text-effect-930.html", [`${q}`,])
.then((data) => walle.sendMessage(m.chat, { image: { url: data }, caption: `${global.botname}` }, { quoted: cpubli }))
.catch((err) => console.log(err));
break

case 'dropwater':
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle“_*`)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [`${q}`,])
.then((data) => walle.sendMessage(m.chat, { image: { url: data }, caption: `${global.botname}` }, { quoted: cpubli }))
.catch((err) => console.log(err));
break

case '3d':
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle“_*`)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [`${q}`,])
.then((data) => walle.sendMessage(m.chat, { image: { url: data }, caption: `${global.botname}` }, { quoted: cpubli }))
.catch((err) => console.log(err));
break

case 'glitch':{
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle|bot“_*`)
inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
let anu = await textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [`${logo4}`,`${logo9}`])
console.log(anu)
walle.sendMessage(from,{image:{url:anu}, caption:"WalleBot-MD"},{quoted:cpubli})
}
break

case 'tiktokstyle':{
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle|bot“_*`)
inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
let anu = await textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [`${logo4}`,`${logo9}`])
console.log(anu)
walle.sendMessage(from,{image:{url:anu}, caption:"WalleBot-MD"},{quoted:cpubli})
}
break

case 'pornhub':{
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle|bot“_*`)
inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
walle.sendMessage(from,{image:{url:anu}, caption:"WalleBot-MD"},{quoted:cpubli})
}
break

case 'avengers':{
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle|bot“_*`)
inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
let anu = await textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [`${logo4}`,`${logo9}`])
console.log(anu)
walle.sendMessage(from,{image:{url:anu}, caption:"WalleBot-MD"},{quoted:cpubli})
}
break

case 'marvel':{
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} walle|bot“_*`)
inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
let anu = await textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [`${logo4}`,`${logo9}`])
console.log(anu)
walle.sendMessage(from,{image:{url:anu}, caption:"WalleBot-MD"},{quoted:cpubli})
}
break

//Menu Juegos 🎮 RP1
case 'fotospareja':  
case 'fotos': {
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
walle.sendMessage(m.chat, { image: { url: random.male }, caption: `WalleBot - MD` }, { quoted: cpubli })
walle.sendMessage(m.chat, { image: { url: random.female }, caption: `WalleBot - MD` }, { quoted: cpubli })
}
break

case 'ttfalso':
case 'tweetfalso':
case 'twetfalso':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
if(!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} wallebot|Epico:)”_*`)
texto1 = args.join(" ")
texto2 = args.join(" ")
var texto1 = texto1.split('|')[0]
var texto2 = texto2.split('|')[1]
walle.sendMessage(m.chat, { image: { url: `https://zenzapis.xyz/creator/maketweet?text2=${texto1}&text=${texto2}&apikey=${zenapi}` }, caption: `${global.botname}` }, { quoted: cpubli })
break

case 'porhubcomentario':
case 'phcomentario':
case 'phc':
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if(!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} wallebot|Epico:)”_*`)
texto1 = args.join(" ")
texto2 = args.join(" ")
var texto1 = texto1.split('|')[0]
var texto2 = texto2.split('|')[1]
walle.sendMessage(m.chat, { image: { url: `https://zenzapis.xyz/creator/phcomment?url=https://i.ibb.co/KjSBWx4/Pics-Art-02-07-11-45-03.jpg&text=${texto2}&text2=${texto1}&apikey=${zenapi}` }, caption: `${global.botname}` }, { quoted: cpubli })
break

case 'gays':
case 'topgays':
case 'losgays': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!AntiJuegos) return reply(answer.juegos)
let member = participants.map(u => u.id)
let primero = member[Math.floor(Math.random() * member.length)]
let segundo = member[Math.floor(Math.random() * member.length)]
let tercero = member[Math.floor(Math.random() * member.length)]
let cuarto = member[Math.floor(Math.random() * member.length)]
let quinto = member[Math.floor(Math.random() * member.length)]
let jawab = `*「 <TOP GAYS/> 」*\n\n\n_- 1:_ *_@${primero.split('@')[0]}_* _A ella/el le encantan las v3rg4s largas pero lisas 😍_\n_- 2:_ *_@${segundo.split('@')[0]}_* _A está zorrita le gustan las v3rg4s monumentales que le entren por atras y le salgan por la boca 🍆_\n_- 3:_ *_@${tercero.split('@')[0]}_* _A ella/el le gustan las v3rg4s normales pero peludas, dicen que depila los pelos con los dientes 👄_\n_- 4:_ *_@${cuarto.split('@')[0]}_* _A ella/el le gustan las v3rg4s pequeñas pq las grandes le lastiman 😞_\n_- 5:_ *_@${quinto.split('@')[0]}_* _A ella/el le gustan las v3rg4s  anchas tipo tapon de alberca 🐡_`
let menst = [primero, segundo, tercero, cuarto, quinto]
let buttons = [
{ buttonId: 'huy', buttonText: { displayText: '🏳️‍🌈🏳️‍🌈🏳️‍🌈' }, type: 1 }
]
await walle.sendButtonText(m.chat, buttons, jawab, walle.user.name, fdocs, {mentions: menst})
}
break

case 'mimuerte':
case 'muerte':
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
if (!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Cesar”_*`)
predea = await axios.get(`https://api.agify.io/?name=${text}`)
reply(`_Nombre:_ *_${predea.data.name}_*\n_Morira a los:_ *_${predea.data.age}_* _Años._\n\n_Rapido, rapido, chupamela para que perdone tus pecados te queda poco tiempo :(_`)
break

case 'formarpareja':
case 'virtuales':
case 'parejavir': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!AntiJuegos) return reply(answer.juegos)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `*_@${orang.split('@')[0]}_* _&_ *_@${jodoh.split('@')[0]}_* _Serian una linda pareja ;)_`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'sexop️', buttonText: { displayText: '❤️ Secso :3' }, type: 1 }
]
await walle.sendButtonText(m.chat, buttons, jawab, walle.user.name, fdocs, {mentions: menst})
 }
break

case 'mimitad':
case 'duo':
case 'dua':
case 'mivirtual': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!AntiJuegos) return reply(answer.juegos)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `_Hey_ *_@${me.split('@')[0]}_️* _tu virtualito(a) perfecto(a) es_ *_@${jodoh.split('@')[0]}_* _serian una linda pareja :3 UwU 🌸_`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'musiquita', buttonText: { displayText: '¿Quieres Ser Mi Flaco(a) 💕?' }, type: 1 }
]
await walle.sendButtonText(m.chat, buttons, jawab, walle.user.name, fdocs, {mentions: ments})
}
break

case 'gay':
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
if (!text) return reply(`_Tagee a alguien, ejemplo:_ *_‟${prefix + command} @Walle”_*`)
const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const tik = can[Math.floor(Math.random() * can.length)]
walle.sendMessage(m.chat, { text: `*「 <VERIFICADOR DE GAYS/> 」*\n\n_Ohhh mi sistema dice que_ *_${text}_* _es_ *_${tik}%_* _gay 🏳️‍🌈_` }, { quoted: cpubli })
break

case 'kiss':
case 'besar':
if (!m.isGroup) return replay(mess.group) 
if (!text) return reply(`_Tagee a alguien, ejemplo:_ *_‟${prefix + command} @Walle”_*`)
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply(`_Tagee a alguien, ejemplo:_ *_‟${prefix + command} @Walle”_*`)
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
msgbeso = `_Haz besado a_ *_@${mentioned[0].split('@')[0]}_* 💕` 
videobeso = besito
await walle.sendMessage(m.chat, { video: videobeso, caption: msgbeso, gifPlayback: true }, { quoted: cpubli })
break

case 'golpear':
case 'patear':
if (!m.isGroup) return replay(mess.group) 
if (!text) return reply(`_Tagee a alguien, ejemplo:_ *_‟${prefix + command} @Walle”_*`)
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply(`_Tagee a alguien, ejemplo:_ *_‟${prefix + command} @Walle”_*`)
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `_Haz golpeado a_ *_@${mentioned[0].split('@')[0]}_* _dejalo ya esta muerto_ 😤` 
videop = patadita
await walle.sendMessage(m.chat, { video: videop, caption: susp, gifPlayback: true }, { quoted: cpubli })
break

case 'matar':
case 'asesinar':
if (!m.isGroup) return replay(mess.group) 
if (!text) return reply(`_Tagee a alguien, ejemplo:_ *_‟${prefix + command} @Walle”_*`)
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply(`_Tagee a alguien, ejemplo:_ *_‟${prefix + command} @Walle”_*`)
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `_Haz matado a_ *_@${mentioned[0].split('@')[0]}_* ⚰️` 
videop = fs.readFileSync('./media/videos/matar.mp4')
await walle.sendMessage(m.chat, { video: videop, caption: susp, gifPlayback: true }, { quoted: cpubli })
break

case 'nalgear':
case 'nalgada':
if (!m.isGroup) return replay(mess.group) 
if (!text) return reply(`_Tagee a alguien, ejemplo:_ *_‟${prefix + command} @Walle”_*`)
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply(`_Tagee a alguien, ejemplo:_ *_‟${prefix + command} @Walle”_*`)
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `_Haz nalgeado a_ *_@${mentioned[0].split('@')[0]}_* 😳` 
videop = fs.readFileSync('./media/videos/nalgada.mp4')
await walle.sendMessage(m.chat, { video: videop, caption: susp, gifPlayback: true }, { quoted: cpubli })
break

case 'ttc':
case 'ttt': 
case 'xo': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return reply('_¡Todavía estás en el juego_!')
let room = Object.values(this.game).find(room => room.state === '_ESPERANDO_' && (args.join(" ") ? room.name === args.join(" ") : true))
if (room) {
reply('_¡Oponente encontrado!_')
room.o = m.chat
room.game.playerO = m.sender
room.state = '*_JUGANDO_*'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `_Sala Id:_ *${room.id}*

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

_Esperando a_ *_@${room.game.currentTurn.split('@')[0]}_*

_Escribe_ *_surrender_* _para rendirte_`
if (room.x !== room.o) await walle.sendText(room.x, str, m, { mentions: parseMention(str) } )
await walle.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: '_ESPERANDO_'
}
if (args.join(" ")) room.name = args.join(" ")
reply('_Esperando oponente_' + (args.join(" ") ? ` _escriba el comando:_ *_‟${prefix}${command} ${args.join(" ")}”_*` : ''))
this.game[room.id] = room
}
}
break

case 'delttc': case 'delttt': {
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
walle.sendText(m.chat, `_¡Eliminó con éxito la sesión de TicTacToe!_`, m)
} else if (!this.game) {
reply(`_¡Sesión TicTacToe no existe!_`)
} else throw '?'
} catch (e) {
reply('_Opps, ha ocurrido un error!_')
}
}
break

//Menu Anime 🔺
case 'animecuddle':
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonsosMessages = {
image: {url:waifudd.data.url},
caption:  `_Animecuddle_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonsosMessages,{ quoted:cpubli }).catch(err => {
return('_Opps, ha ocurrido un error! ;(')
})
break

case 'animeslap':
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let btutttonssMessages = {
image: {url:waifudd.data.url},
caption:  `_Animeslap_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, btutttonssMessages,{ quoted:cpubli }).catch(err => {
return('_Opps, ha ocurrido un error! ;(')
})
break

case 'animepat':
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let xxbuttonssMessages = {
image: {url:waifudd.data.url},
caption:  `_Animepat_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, xxbuttonssMessages,{ quoted:cpubli }).catch(err => {
return('_Opps, ha ocurrido un error! ;(')
})
break

case 'animeneko':
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
waifudd = await axios.get(`https://nekos.life/api/v2/img/neko`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonsTsMessages = {
image: {url:waifudd.data.url},
caption:  `_Animeneko_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonsTsMessages,{ quoted:cpubli }).catch(err => {
return('_Opps, ha ocurrido un error! ;(')
})
break

case 'animehug':
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonussMessages = {
image: {url:waifudd.data.url},
caption:  `_Animehug_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonussMessages,{ quoted:cpubli }).catch(err => {
return('_Opps, ha ocurrido un error! ;(')
})
break

case 'animekiss':
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let bxxuttonssMessages = {
image: {url:waifudd.data.url},
caption:  `_Animekiss_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, bxxuttonssMessages,{ quoted:cpubli }).catch(err => {
return('_Opps, ha ocurrido un error! ;(')
})
break

case 'animewlp':
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttoxnssMessages = {
image: {url:waifudd.data.url},
caption:  `_Animewlp_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttoxnssMessages,{ quoted:cpubli }).catch(err => {
return('_Opps, ha ocurrido un error! ;(')
})
break

case 'animespank':
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonssxMessages = {
image: {url:waifudd.data.url},
caption:  `_Animespank_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 4
}
await walle.sendMessage(m.chat, buttonssxMessages,{ quoted:cpubli }).catch(err => {
return('_Opps, ha ocurrido un error! ;(')
})
break

case 'shinobu':  
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
ud = await axios.get('https://waifu.pics/api/sfw/shinobu')
var wbutsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonsesMessage = {
image: {url:ud.data.url},
caption:  `_Shinobu_`,
footer: `${global.botname}`,
buttons: wbutsss,
headerType: 4
}
await walle.sendMessage(m.chat,buttonsesMessage, { quoted:cpubli }).catch(err => {
return('_Opps, ha ocurrido un error! ;(')
})
break

case 'megumin':
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let buttonzMessage = {
image: {url:ud.data.url},
caption: `_Megumin_`,
footer: `${global.botname}`,
buttons: wbutsss,
headerType: 4
}
await walle.sendMessage(m.chat,buttonzMessage, { quoted:cpubli }).catch(err => {
return('_Opps, ha ocurrido un error! ;(')
})
break 

case 'awoo':
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
var wbuttsss = [
{buttonId: `${prefix + command}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let button1Messages = {
image: {url:waifudd.data.url},
caption:  `_Awoo_`,
footer: `${global.botname}`,
buttons: wbuttsss,
headerType: 2
}  
await walle.sendMessage(m.chat, button1Messages, { quoted:cpubli }).catch(err => {
return('_Opps, ha ocurrido un error! ;(')
})
break

case 'animewall': 
case 'animewallpaper':
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Goku“_*`)
const wall = new AnimeWallpaper();
const pages = [1,2,3,4];
const random=pages[Math.floor(Math.random() * pages.length)]
const wallpaper = await wall
.getAnimeWall4({ title: q, type: "sfw", page: pages })
.catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: `Siguiente ▶️`}, type: 1},
]
let wal = {
image: {url:wallpaper[i].image},
caption: `_Busqueda:_ *_${q}_*`,
footer: `${global.botname}`,
buttons: walb,
headerType: 4
}
await walle.sendMessage(m.chat, wal,{ quoted:cpubli }).catch(err => {
return('_Opps, ha ocurrido un error! ;(')
})
break

//Menu Nsfw 🔞
case 'masturbation': 
case 'jahy': 
case 'hentai': 
case 'glasses': 
case 'gangbang': 
case 'foot': 
case 'femdom': 
case 'cum': 
case 'ero': 
case 'cuckold': 
case 'blowjob': 
case 'bdsm': 
case 'ahegao': 
case 'ass': 
case 'orgy': 
case 'panties': 
case 'pussy': 
case 'thighs': 
case 'yuri': 
case 'tentacles':
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
if (!AntiNsfw) return reply(answer.nsfw)
try{
NoHorny = await fetchJson(`https://wallebotrestapi-production.up.railway.app/docs/nsfw/${command}?apikey=Donitas`)
YesHorny = await getBuffer(NoHorny.result)
walle.sendMessage(from, {image:YesHorny},{quoted:cpubli})
} catch (e) {error("_¡Opps, ha ocurrido un error! ;(")}
break

case 'pareja':
case 'dibujo':
case 'wdibujo':
if(!text) return reply(`_Ejemplo de uso:_ *_‟${prefix + command} Mito|Yo”_*`)
if (isBannedUser) return reply(answer.banneduser) 
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return reply(answer.group) 
texto1 = args.join(" ")
texto2 = args.join(" ")
var texto1 = texto1.split('|')[0]
var texto2 = texto2.split('|')[1]
walle.sendMessage(m.chat, { image: { url: `https://irlibutt.sirv.com/Images/IMG-20220724-WA0019.jpg?profile=mito&text.0.text=${texto1}&text.0.opacity=89&text.1.text=${texto2}` }, caption: `${global.botname}` }, { quoted: cpubli })
break

//FIN
case 'reglas':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
reply(`*「 <REGLAS/> 」*\n\n *- Evite llamar al bot.*\n *- Evite hacer spam*\n *- Evite enviar videos/audios/archivos al bot*\n *- Evite hacer reportes o peticiones innecesarias*\n\n *¡Sea un usuario responsable!*`)
break

case 'explicacion':
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
reply(`*「 <INFORMACION/> 」*\n\n*- Comando:* _Es una petición previamente programada para realizar alguna actividad por ejemplo hacer un sticker, bajar musica etc._\n\n*- Prefijo:* _Es un caracter al comienzo del comando, que permite indentificar entre un mensaje o petición._\n\n*- WalleBot:* _Es un script o archivo progrado previamente para realizar algunas funciones para ayudar a usuarios sin conexión a internet o brindar una mejor administración a los grupos, sin embargo la gente suele usarlo para bajar musica o tiktoks sin marca de agua para estados de WhatsApp.`)
break

case 'apoyar': {
if (isBannedUser) return reply(answer.banneduser)	 			
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
teks = `*「 <${global.botname}/> 」*\n\n_- Paypal:_ *wallexmito@gmail.com*\n_- YouTube:_ *${global.ytlink}*\n_- GitHub:_ *${global.botscript}*\n\n¡Gracias por usar WalleBot ;)!`
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: thumb,
jpegThumbnail: thumb,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Ola :3",
body: "¡Click para donar!", 
thumbnail: fs.readFileSync("media/imagenes/walle.jpg"),
mediaType:1,
mediaUrl: '',
sourceUrl: ""
}}
}
walle.sendMessage(m.chat, buttonMessage, { quoted: cpubli })
}
break

case 'guia': {
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
 title: `*_Hola 👋 ${pushname}_*`,
 description: `_- ‟Esta es una guía de uso y reglas a seguir para no tener complicaciones al usar WalleBot”_\n`,
 buttonText: "¡Tap!",
 footerText: `${global.botname}`,
 listType: "SINGLE_SELECT",
 sections: [{
"title": "Guia de uso 📰",
"rows": [
{
"title": "Reglas de uso",
"description": "Lista de las cosas que debes de saber antes de usar a WalleBot.",
"rowId": `${prefix}reglas`
},
{
"title": "¿Qué son los Comandos, Prefijos y WalleBot?",
"description": "Explicación de Prefijos, Comandos y Argumentos.",
"rowId": `${prefix}explicacion`
}
]
}
],
listType: 1
}
}), {})
walle.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break

case 'comandos': 
case 'menú': 
case 'list': 
case 'menu': 
case 'help': {
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup)
if (!m.isGroup) return replay(mess.group) 
walle.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})
var wbutsss = [
{buttonId: `${prefix}guia`, buttonText: {displayText: `Guia 📜️`}, type: 1},
{buttonId: `${prefix}p`, buttonText: {displayText: `Estado 📊️`}, type: 1},
{buttonId: `${prefix}allmenu`, buttonText: {displayText: `Menu Principal 📦️`}, type: 1}
]
let buttonsmenuMessage = {
image: picak,
caption: `${menulist}`,
footer: `${global.botname}`,
buttons: wbutsss,
headerType: 4
}
await walle.sendMessage(m.chat,buttonsmenuMessage, { quoted:cpubli }).catch(err => {
return('_Opps, ha ocurrido un error! ;(')
})
}
break

case 'react': { 
if (!m.isGroup) return reply(answer.group) 
if (isBannedUser) return reply(answer.banneduser)
if (isBannedGroup) return reply(answer.bannedgroup) 
walle.sendMessage(m.chat, reactionMessage)} 
break  

case 'allmenu':{
let btn = [{
urlButton: {
displayText: 'YouTube',
url: `${ytlink}`
}
}]
let setbot = db.data.settings[botNumber]
if (setbot.templateImage) {
walle.send5ButImg(m.chat, allmenulist, global.botname, global.thumb, btn, global.thumb)
} else if (setbot.templateGif) {
walle.send5ButGif(m.chat, allmenulist, global.botname, global.vidmenu, btn, global.thumb)
} else if (setbot.templateVid) {
walle.send5ButVid(m.chat, anu, global.botname, global.vidmenu, btn, global.thumb)
} else if (setbot.templateVideo) {
walle.send5ButVid(m.chat, allmenulist, global.botname, global.vidmenu, btn, global.thumb)
} else if (setbot.templateDocument) {
let buttonmenu = [
{ urlButton: { displayText: `YouTube`, url : `${ytlink}` } }
]
walle.sendMessage(m.chat, { caption: allmenulist, document: fs.readFileSync('./media/archivos/walle.xlsx'), mimetype: `${docs}`, fileName: `${ownername}`, templateButtons: buttonmenu, footer: `${botname}`, mentionedJid: [m.sender] })
}
}
break

default:
if (m.sender.startsWith('1' || '92' || '91' || '357' || '359' || '91' || '234' || '212' || '213' || '233' || '258' || '297' || '350' || '371' || '380' || '972')) {
if (!AntiArabes) return
walle.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
reply('*_‟AntiArabes“_* _¡Ok, se ha removido al participante con numero ‟extraño” por seguridad del grupo!_')
}

if (budy.startsWith('=>')) {
if (!isCreator) return reply(answer.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return reply(answer.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return reply(answer.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}

//anti-tag
const listTag = [`${global.ownertag}@s.whatsapp.net`]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''

//anti-tag 2
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return reply(answer.group)
if (m.key.fromMe) return
sendNye = fs.readFileSync('./media/stickers/yourtag.webp')
walle.sendReadReceipt(m.chat, m.sender, [m.key.id])
walle.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:cpubli})
}

//anti-tag 3
if (budy.includes(`${global.ownertag}`)) {
if (antitags === false) return
if (!m.isGroup) return reply(answer.group)
if (m.key.fromMe) return
sendNye = fs.readFileSync('./media/stickers/yourtag.webp')
walle.sendReadReceipt(m.chat, m.sender, [m.key.id])
walle.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:cpubli})
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
walle.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}


} catch (err) {
m.reply
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.greenBright(`=> ${__filename} Actualizado.`))
delete require.cache[file]
require(file)
})
