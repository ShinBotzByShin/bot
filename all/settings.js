require("./module")

global.owner = "62882008689313" //PAKE NO LU BIAR BISA ADD AKSES
global.namabot = "Azariabotz" //NAMA BOT GANTI
global.nameCreator = "Azariastore" //NAMA CREATOR GANTI AJA
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
global.antilink = false //NOT CHANGE / JANGAN GANTI
global.versisc = '1.0.0' //NOT CHANGE / JANGAN GANTI
global.codeInvite = "CswK4kvQD1u7SfSmsYfMHZ"
//======================================
global.domain = '' //DOMAIN 1
global.apikey = '' // PLTA 1
global.capikey = '' //PLTC 1
global.eggsnya = '15' //ID EGGS 1
//=====================================
global.location = '1' //SEMUA LOCATION SAMA AJA BIAR G EROR
global.imageurl = 'https://telegra.ph/file/ae759c5a758d2eb004ee6.jpg' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = 'https://chat.whatsapp.com/DFaZzqySljDAhinMJHVCgL' ///GANTI MENGGUNAKAN LINK GRUBMU YA
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
global.simbol = 'ダ'
global.simbol1 = '❖'
global.simbol2 = '✦'
global.tekspushkon = "" //NOT CHANGE / JANGAN GANTI
global.tekspushkonv2 = "" //NOT CHANGE / JANGAN GANTI
global.packname = "© Created By" //GANTI AJ
global.author = "Azaristore ⚡ Cpanel Bot" //GANTI SERAH MU
global.jumlah = "5" ////NOT CHANGE / JANGAN GANTI

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})