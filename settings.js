const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
zenz: 'https://zenzapis.xyz',
}

global.APIKeys = {
'https://zenzapis.xyz': 'key',
}

global.key1 = ['cf650a9b7f']
global.key2 = ['eda19b89d5']
global.key3 = ['843aeb2d47dd']
global.key4 = ['e9ef6f24d7']
global.key5 = ['3de1a9c746f0']
global.key6 = ['hdiiofficial']

global.key7 = ['tSQA61']
global.key8 = ['mi268c']
global.key9 = ['TeZIi7']

global.autoTyping = false
global.autoreadpmngc = false
global.autoReadGc = false
global.autoRecord = false
global.available = true

global.vidmenu = fs.readFileSync("./media/videos/walle.mp4")

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

global.vcardowner = ['5215621341581']
global.ownername = "MITO X"
global.ytname = "YouTube: MITO X" 
global.socialm = "GitHub: Saidemx" 
global.location = "México"

global.owner = ['5215621341581']
global.ownertag = '5215621341581'
global.botname = 'WalleBot - MD'
global.ytlink = "https://youtube.com/channel/UC-3iPl2EiGGTMiwJS3UGuFQ" 
global.botscript = 'https://github.com/saidemx'
global.reactmoji = "🚀"
global.themeemoji = "-"
global.packname = "WalleBot - MD"
global.author = "By MITO X"

global.thumb = fs.readFileSync("./media/imagenes/walle.jpg") // thumb pic

global.premium = ['5215621341581']

global.sessionName = 'session'
global.antitags = false
global.prefa = ['.']
global.sp = '⭔'
global.answer = {
success: '_¡Ok, aqui tienes ;)!_',
admin: '_¡Debes de ser administrador del grupo para ejecutar este comando!_',
botAdmin: '*_WalleBot_* _¡debe ser administrador del grupo para ejecutar este comando!_',
owner: '_¡Únicamente mi desarollador puede ejecutar este comando!_',
premium: '_¡Únicamente usuarios_ *_‟Premium”_* _pueden utilizar este comando!, si deseas información sobre como obtener premium contacta con mi desarollador usando /desarollador._',
group: '_Opps, lo siento solo puedo responder comandos en grupos, pero puedes unirte a mi grupo oficial_ ;)',
bot: '_¡Únicamente_ *_WalleBot_* _puede ejecutar este comando!_',
wait: '_[ ! ] Ok, espere un momento..._',
linkm: '_¡Debes de ingresar un enlace!_',
error: '_¡Opps, ha ocurrido un error si este no se solucióna utiliza /reporte + el problema!_',
banneduser: '_¡Haz sido baneado(a)/vetado(a) de mi base de datos por lo que no puedes utilizar los comandos, si crees que es un error comunicate con mi desarollador!_',
nsfw: '¡La funcion NSFW (+18) no esta activa actualmente, comunicate con un administrador para poder activarla!',
juegos: '¡El modo juegos con menciones no esta activado actualmente, comunicate con un administrador para poder activarlo usando /juegos!',
bannedgroup: '_¡El bot fue baneado de este grupo, comuníquese con mi desarrollador para desbanearlo!_'
}

global.walle = fs.readFileSync("./media/imagenes/walle.jpg")
global.walle2 = fs.readFileSync("./media/imagenes/walle2.jpg")
global.walle3 = fs.readFileSync("./media/imagenes/walle3.jpg")
global.walle4 = fs.readFileSync("./media/imagenes/walle4.jpg")
global.walle5 = fs.readFileSync("./media/imagenes/walle5.jpg")

global.beso = fs.readFileSync("./media/videos/beso.mp4") 
global.beso2 = fs.readFileSync("./media/videos/beso2.mp4") 
global.beso3 = fs.readFileSync("./media/videos/beso3.mp4") 
global.beso4 = fs.readFileSync("./media/videos/beso4.mp4") 
global.beso5 = fs.readFileSync("./media/videos/beso5.mp4") 

global.patada = fs.readFileSync("./media/videos/patada.mp4") 
global.patada2 = fs.readFileSync("./media/videos/patada2.mp4") 
global.patada3 = fs.readFileSync("./media/videos/patada3.mp4") 
global.patada4 = fs.readFileSync("./media/videos/patada4.mp4") 
global.patada5 = fs.readFileSync("./media/videos/patada5.mp4") 

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.greenBright(`=> '${__filename}' Ha sido actualizado.`))
delete require.cache[file]
require(file)
})
