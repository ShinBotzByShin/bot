module.exports = async (Manz, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await Manz.decodeJid(Manz.user.id)
const sender = m.key.fromMe ? (Manz.user.id.split(':')[0]+'@s.whatsapp.net' || Manz.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Manz.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isContacts = contacts.includes(sender)
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const { addSaldo, minSaldo, cekSaldo } = require("./all/database/deposit");
const { mediafireDl } = require('./all/database/mediafire.js') 
let db_saldo = JSON.parse(fs.readFileSync("./all/database/saldo.json"));

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return Manz.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }

// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const creator = JSON.parse(fs.readFileSync("./all/database/creator.json"))
const seler = JSON.parse(fs.readFileSync("./all/database/seler.json"))
const Admin = JSON.parse(fs.readFileSync("./all/database/admin.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isCreator = seler.includes(sender)
const isSeler = seler.includes(sender)
const isAdmin = Admin.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot

// VERSI OWNER
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await Manz.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Manz.getName(i + '@s.whatsapp.net')}\n
FN:${await Manz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:support@azariastore.com\n
item2.X-ABLabel:Email\n
item3.URL:https://chat.whatsapp.com/Bn3tcvTGopCHirKLd2Us9z
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
// VERSI ADMIN
let list2 = []
for (let i of Admin) {
list2.push({
displayName: await Manz.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Manz.getName(i + '@s.whatsapp.net')}\n
FN:${await Manz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:support@azariastore.com\n
item2.X-ABLabel:Email\n
item3.URL:https://chat.whatsapp.com/Bn3tcvTGopCHirKLd2Us9z
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await Manz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
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
}), { userJid: jid, quoted: m })
Manz.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => { 
Manz.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "Azariastore`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://telegra.ph/file/6bb8982c6c42a4cd5f1be.jpg", 
"sourceUrl": "https://wa.me/62882008689313" }}}, { quoted: m }) }

// fake quoted bug
const lep = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
'isAnimated': []
}}}

const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Bot by Azariastore`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/a40ea8290e11190e5d05a.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
Manz.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
Manz.groupParticipantsUpdate(m.chat, [sender], 'remove')
Manz.sendMessage(m.chat, { delete: m.key })
}
}

switch (command) {
case 'menu': {
const owned = `${owner}@s.whatsapp.net`
const version = require("baileys/package.json").version
const menu = `
ʜᴀʟᴏ ᴋᴀᴋ @${pushname} 👋

ɴᴀᴍᴀ ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ *ꜱʜɪɴʙᴏᴛᴢ*

ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ sᴇʙᴀɢᴀɪ *ʙᴏᴛ ᴄʀᴇᴀᴛᴇ ᴘᴀɴᴇʟ*
ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

┌ ◦ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ғɪᴛᴜʀ ʙᴏᴛ: *.ᴀʟʟᴍᴇɴᴜ*
└ ◦ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ sɪᴍᴘᴇʟ ᴍᴇɴᴜ: *ᴍᴀɪɴᴍᴇɴᴜ*

Copyright © Azariastore and all rights reserved`
           const videoFile = fs.readFileSync('./all/menu.mp4');
Manz.sendMessage(m.chat, {
    video: videoFile,
    caption: menu,
    gifPlayback: true,
    contextInfo: {
        externalAdReply: {
            showAdAttribution: true,
            title: global.namabot,
            body: global.namaCreator,
            thumbnailUrl: global.imageurl,
            sourceUrl: global.isLink,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, {
    quoted: fkontak
});

// Bagian lain dari kode

const audioFile = fs.readFileSync('./all/menu.mp3');
await Manz.sendMessage(m.chat, { audio: audioFile, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
}
break
case 'allmenu': {
const allmenu =`┈──────────────────────── •
                        *INFO BOT*
┈──────────────────────── •
   • Bot Name : ${namabot} 
   • Creator : ${nameCreator}
   • Creator Number: @${owner.split("@")[0]}
   • Runtime : ${runtime(process.uptime())}
┈──────────────────────── •
                        *MENU BOT*
┈──────────────────────── •
                *卩卂几乇ㄥ     爪乇几ㄩ*

• addusr
• addsrv
• listusr
• listsrv
• delusr
• delsrv
• ramlist
• createadmin
• linklog

┈──────────────────────── •
                *ᗪ卂ㄒ卂乃卂丂乇     爪乇几ㄩ*

• addseler
• addsubdo
• addowner
• listowner
• listadmin
• listseler
• delseler
• delsubdo
• delowner

┈──────────────────────── •
                *ㄖ山几乇尺     爪乇几ㄩ*

• hidetag
• totag
• self
• public

┈──────────────────────── •
`
const videoFile = fs.readFileSync('./all/menu.mp4');
Manz.sendMessage(m.chat, {
    video: videoFile,
    caption: allmenu,
    gifPlayback: true,
    contextInfo: {
        externalAdReply: {
            showAdAttribution: true,
            title: global.namabot,
            body: global.namaCreator,
            thumbnailUrl: global.imageurl,
            sourceUrl: global.isLink,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
}, {
    quoted: fkontak
});

const audioFile = fs.readFileSync('./all/menu.mp3');
await Manz.sendMessage(m.chat, { audio: audioFile, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
}
break
case "mainmenu": {
const text12 = `┈──────────────────────── •
                        *INFO BOT*
┈──────────────────────── •
   • Bot Name : ${namabot} 
   • Creator : ${nameCreator}
   • Creator Number: @${owner.split("@")[0]}
   • Runtime : ${runtime(process.uptime())}
┈──────────────────────── •
                        *MENU BOT*
┈──────────────────────── •

• allmenu 
• mainmenu
• panelmenu
• databasemenu
• ownermenu
• domainmenu
• script
• owner

┈──────────────────────── •`;
  
  Manz.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m });
}
break
case "panelmenu": {
const text12 = `┈──────────────────────── •
                        *INFO BOT*
┈──────────────────────── •
   • Bot Name : ${namabot} 
   • Creator : ${nameCreator}
   • Creator Number: @${owner.split("@")[0]}
   • Runtime : ${runtime(process.uptime())}
┈──────────────────────── •
                        *MENU BOT*
┈──────────────────────── •

• addusr
• addsrv
• listusr
• listsrv
• delusr
• delsrv
• ramlist
• createadmin
• linklog

┈──────────────────────── •`;
  
  Manz.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m });
}
break
case "databasemenu": {
const text12 = `┈──────────────────────── •
                        *INFO BOT*
┈──────────────────────── •
   • Bot Name : ${namabot} 
   • Creator : ${nameCreator}
   • Creator Number: @${owner.split("@")[0]}
   • Runtime : ${runtime(process.uptime())}
┈──────────────────────── •
                        *MENU BOT*
┈──────────────────────── •

• addprem (Panel)
• addseler (Subdomain)
• addowner
• listowner
• listprem
• listseler
• delseler
• delprem
• delowner

┈──────────────────────── •`;
  
  Manz.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m });
}
break
case "ownermenu": {
const text12 = `┈──────────────────────── •
                        *INFO BOT*
┈──────────────────────── •
   • Bot Name : ${namabot} 
   • Creator : ${nameCreator}
   • Creator Number: @${owner.split("@")[0]}
   • Runtime : ${runtime(process.uptime())}
┈──────────────────────── •
                        *MENU BOT*
┈──────────────────────── •

• hidetag
• totag
• self
• public

┈──────────────────────── •`;
  
  Manz.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m });
}
break

case "ramlist":{
const text12 = `1GB ✅
2GB ✅
3GB ✅
4GB ✅
5GB ✅
6GB ✅
7GB ✅
8GB ✅
9GB ✅
10GB ✅
UNLI (Khusus Owener Reseller Panel)

_cara create panel dengan mengetik ${prefix}panel_
`
Manz.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case 'esceh': case 'script': case 'sc': {
let Rawwwwr = `_${pushname}👋_\n
*SC Create Panel & Subdomain*\n
Mau beli scriptnya?\n\n
*Contact Person 📞*\n
https://wa.me/62882008689313\n\n
*Pembayaran Via* 💳\n
_Qris / Dana / Gopay / Ovo_\n\n
*Harga : Rp25.000 (25k)*\n
Sudah termasuk tutorial.\n
Size script sudah ringan.\n
Anti ngelag/delay.`
Manz.relayMessage(m.chat, {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: 25000 * 1000,
      requestFrom: m.sender,
      noteMessage: {
        extendedTextMessage: {
          text: `_${pushname}👋_\n
*SC Create Panel & Subdomain*\n
Mau beli scriptnya?\n\n
*Contact Person 📞*\n
https://wa.me/62882008689313\n\n
*Pembayaran Via* 💳\n
_Qris / Dana / Gopay / Ovo_\n\n
*Harga : Rp25.000 (25k)*\n
Sudah termasuk tutorial.\n
Size script sudah ringan.\n
Anti ngelag/delay.`,
          contextInfo: {
            mentionedJid: [owner[1] + '@s.whatsapp.net'],
            externalAdReply: {
              showAdAttribution: true
            }
          }
        }
      }
    }
  }, {})
}
break
//===========[ SEVER PANEL ]==========
case "1gb": {
    
if (!isOwner && !isSeler && !isAdmin) return m.reply("Fitur khusus Reseller Panel")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur khusus group")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Nodejs" + "[1GB]"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "50"
let disk = "2048"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/6bb8982c6c42a4cd5f1be.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "Azariastore@2024"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE PANEL

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `_*Here's Your Data Account!*
======================
👤 Username : ${user.username}
🔐 Password : ${password}
📆 Buy at : ${hariini}
🌐 Login : ${domain}
======================
*RULES PANEL*
- No Overload
- No Share Account Hosting
- No For Material DDoS
- No Resell Data Hosting

*📞 Contact*
support@azariastore.com

_Copyright © Azariastore 2024_
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU ${server.limits.cpu}%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*
`)

}
break
case "2gb": {
    if (!isOwner && !isSeler && !isAdmin) return m.reply("Fitur khusus Reseller Panel")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur khusus group")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Nodejs" + "[2GB]"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "100"
let disk = "4096"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/6bb8982c6c42a4cd5f1be.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "Azariastore@2024"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
*Here's Your Data Account!*
======================
👤 Username : ${user.username}
🔐 Password : ${password}
📆 Buy at : ${hariini}
🌐 Login : ${domain}
======================
*RULES PANEL*
- No Overload
- No Share Account Hosting
- No For Material DDoS
- No Resell Data Hosting

*📞 Contact*
support@azariastore.com

_Copyright © Azariastore 2024_
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU ${server.limits.cpu}%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*
`)

}

break
case "3gb": {
    if (!isOwner && !isSeler && !isAdmin) return m.reply("Fitur khusus Reseller Panel")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur khusus group")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Nodejs" + "[3GB]"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "150"
let disk = "6144"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/6bb8982c6c42a4cd5f1be.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "Azariastore@2024"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
*Here's Your Data Account!*
======================
👤 Username : ${user.username}
🔐 Password : ${password}
📆 Buy at : ${hariini}
🌐 Login : ${domain}
======================
*RULES PANEL*
- No Overload
- No Share Account Hosting
- No For Material DDoS
- No Resell Data Hosting

*📞 Contact*
support@azariastore.com

_Copyright © Azariastore 2024_
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU ${server.limits.cpu}%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*
`)
}
break
case "4gb" :{
    if (!isOwner && !isSeler && !isAdmin) return m.reply("Fitur khusus Reseller Panel")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur khusus group")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Nodejs" + "[4GB]"
let egg = global.eggsnya
let loc = global.location
let memo = "4096"
let cpu = "200"
let disk = "8192"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/6bb8982c6c42a4cd5f1be.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "Azariastore@2024"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
*Here's Your Data Account!*
======================
👤 Username : ${user.username}
🔐 Password : ${password}
📆 Buy at : ${hariini}
🌐 Login : ${domain}
======================
*RULES PANEL*
- No Overload
- No Share Account Hosting
- No For Material DDoS
- No Resell Data Hosting

*📞 Contact*
support@azariastore.com

_Copyright © Azariastore 2024_
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU ${server.limits.cpu}%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*
`)
}
break
case "unli": {
if (!isOwner && !isSeler && !isAdmin) return m.reply("Fitur khusus Reseller Panel")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur khusus group")
if (!isOwner && !isAdmin) return m.reply("Fitur khusus Owner Reseller Panel")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Nodejs" + "[Unli]"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/6bb8982c6c42a4cd5f1be.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "Azariastore@2024"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
*Here's Your Data Account!*
======================
👤 Username : ${user.username}
🔐 Password : ${password}
📆 Buy at : ${hariini}
🌐 Login : ${domain}
======================
*RULES PANEL*
- No Overload
- No Share Account Hosting
- No For Material DDoS
- No Resell Data Hosting

*📞 Contact*
support@azariastore.com

_Copyright © Azariastore 2024_
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU ${server.limits.cpu}%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*
`)

}

break
case "5gb":{
if (!isOwner && !isSeler && !isAdmin) return m.reply("Fitur khusus Reseller Panel")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur khusus group")
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Nodejs" + "[5GB]"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "250"
let disk = "10240"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/6bb8982c6c42a4cd5f1be.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "Azariastore@2024"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
*Here's Your Data Account!*
======================
👤 Username : ${user.username}
🔐 Password : ${password}
📆 Buy at : ${hariini}
🌐 Login : ${domain}
======================
*RULES PANEL*
- No Overload
- No Share Account Hosting
- No For Material DDoS
- No Resell Data Hosting

*📞 Contact*
support@azariastore.com

_Copyright © Azariastore 2024_
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU ${server.limits.cpu}%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*
`)

}

break
case "6gb":{
if (!isOwner && !isSeler && !isAdmin) return m.reply("Fitur khusus Reseller Panel")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur khusus group")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Nodejs" + "[6GB]"
let egg = global.eggsnya
let loc = global.location
let memo = "6144"
let cpu = "300"
let disk = "12288"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/6bb8982c6c42a4cd5f1be.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "Azariastore@2024"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
*Here's Your Data Account!*
======================
👤 Username : ${user.username}
🔐 Password : ${password}
📆 Buy at : ${hariini}
🌐 Login : ${domain}
======================
*RULES PANEL*
- No Overload
- No Share Account Hosting
- No For Material DDoS
- No Resell Data Hosting

*📞 Contact*
support@azariastore.com

_Copyright © Azariastore 2024_
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU ${server.limits.cpu}%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*
`)

}

break
case "7gb":{
if (!isOwner && !isSeler && !isAdmin) return m.reply("Fitur khusus Reseller Panel")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur khusus group")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Nodejs" + "[7GB]"
let egg = global.eggsnya
let loc = global.location
let memo = "7168"
let cpu = "350"
let disk = "14336"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/6bb8982c6c42a4cd5f1be.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "Azariastore@2024"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
*Here's Your Data Account!*
======================
👤 Username : ${user.username}
🔐 Password : ${password}
📆 Buy at : ${hariini}
🌐 Login : ${domain}
======================
*RULES PANEL*
- No Overload
- No Share Account Hosting
- No For Material DDoS
- No Resell Data Hosting

*📞 Contact*
support@azariastore.com

_Copyright © Azariastore 2024_
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU ${server.limits.cpu}%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*
`)

}

break
case "8gb" :{
if (!isOwner && !isSeler && !isAdmin) return m.reply("Fitur khusus Reseller Panel")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur khusus group")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Nodejs" + "[8GB]"
let egg = global.eggsnya
let loc = global.location
let memo = "8192"
let cpu = "400"
let disk = "16384"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/6bb8982c6c42a4cd5f1be.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "Azariastore@2024"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
*Here's Your Data Account!*
======================
👤 Username : ${user.username}
🔐 Password : ${password}
📆 Buy at : ${hariini}
🌐 Login : ${domain}
======================
*RULES PANEL*
- No Overload
- No Share Account Hosting
- No For Material DDoS
- No Resell Data Hosting

*📞 Contact*
support@azariastore.com

_Copyright © Azariastore 2024_
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU ${server.limits.cpu}%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*
`)

}

break
case "9gb" :{
if (!isOwner && !isSeler && !isAdmin) return m.reply("Fitur khusus Reseller Panel")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur khusus group")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Nodejs" + "[9GB]"
let egg = global.eggsnya
let loc = global.location
let memo = "9216"
let cpu = "450"
let disk = "18432"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/6bb8982c6c42a4cd5f1be.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "Azariastore@2024"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
*Here's Your Data Account!*
======================
👤 Username : ${user.username}
🔐 Password : ${password}
📆 Buy at : ${hariini}
🌐 Login : ${domain}
======================
*RULES PANEL*
- No Overload
- No Share Account Hosting
- No For Material DDoS
- No Resell Data Hosting

*📞 Contact*
support@azariastore.com

_Copyright © Azariastore 2024_
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU ${server.limits.cpu}%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*
`)

}

break
case "10gb": {
if (!isOwner && !isSeler && !isAdmin) return m.reply("Fitur khusus Reseller Panel")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur khusus group")

let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Nodejs" + "[10GB]"
let egg = global.eggsnya
let loc = global.location
let memo = "10240"
let cpu = "500"
let disk = "20480"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/6bb8982c6c42a4cd5f1be.jpg" 
if (!u) return
let d = (await Manz.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "Azariastore@2024"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
*Here's Your Data Account!*
======================
👤 Username : ${user.username}
🔐 Password : ${password}
📆 Buy at : ${hariini}
🌐 Login : ${domain}
======================
*RULES PANEL*
- No Overload
- No Share Account Hosting
- No For Material DDoS
- No Resell Data Hosting

*📞 Contact*
support@azariastore.com

_Copyright © Azariastore 2024_
`
Manz.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Manz.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU ${server.limits.cpu}%

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*
`)

}

break
case "cadadmin":
case "toadmin":
case "crateadmin":
case "createadmin": {
if (!isOwner) return m.reply("Fitur khusus Owner")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur Khusus Group")

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await Manz.sendMessage(m.chat, listMessage)

    await Manz.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

👤USERNAME :  ${username}
🔑PASSWORD: ${password}
🌐LOGIN: ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*

`,
    })
} 
break
case "delsrv": {
if (!isOwner) return reply('Fitur khusus Owner')
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break

case "delusr": {
if (!isOwner) return reply('Fitur khusus Owner')
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
        case "listusr": {
    if (!isOwner && !isSeler) return reply('Fitur khusus Owner')
    let page = args[0] ? args[0] : '1';
    let f = await fetch(domain + "/api/application/users?page=" + page, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    });
    let res = await f.json();
    let users = res.data;
    let messageText = "Berikut list user:\n\n";

    for (let user of users) {
        let u = user.attributes;
        messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
        messageText += `${u.username}\n`;
        messageText += `${u.first_name} ${u.last_name}\n\n`;
    }

    messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
    messageText += `Total Users: ${res.meta.pagination.count}`;

    await Manz.sendMessage(m.chat, {
        text: messageText
    }, {
        quoted: m
    });

    if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
        reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
    }
}
break;
case "listsrv": {
if (!isOwner && !isSeler) return reply(`khusus owner`)
    let page = args[0] ? args[0] : '1';
    let f = await fetch(domain + "/api/application/servers?page=" + page, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    });
    let res = await f.json();
    let servers = res.data;
    let sections = [];
    let messageText = "Berikut adalah daftar server:\n\n";

    for (let server of servers) {
        let s = server.attributes;

        let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + capikey
            }
        });

        let data = await f3.json();
        let status = data.attributes ? data.attributes.current_state : s.status;

        messageText += `ID Server: ${s.id}\n`;
        messageText += `Nama Server: ${s.name}\n`;
        messageText += `Status: ${status}\n\n`;
    }

    messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
    messageText += `Total Server: ${res.meta.pagination.count}`;

    await Manz.sendMessage(m.chat, {
        text: messageText
    }, {
        quoted: m
    });

    if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
        reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
    }
}


break;
//====== BAGIAN DOMAIN

case "domainmenu": {
const text12 = `┈──────────────────────── •
                        *INFO BOT*
┈──────────────────────── •
   • Bot Name : ${namabot} 
   • Creator : ${nameCreator}
   • Creator Number: @${owner.split("@")[0]}
   • Runtime : ${runtime(process.uptime())}
┈──────────────────────── •
                        *MENU BOT*
┈──────────────────────── •

• listdomain
• addseler
• delseler

┈──────────────────────── •`;
  
  Manz.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m });
}

break

case "listdomain": {
if (!isOwner && !isSeler) return m.reply("Fitur khusus Reseller Subdomain")
const text12 = `┈──────────────────────── •
                        *INFO BOT*
┈──────────────────────── •
   • Bot Name : ${namabot} 
   • Creator : ${nameCreator}
   • Creator Number: @${owner.split("@")[0]}
   • Runtime : ${runtime(process.uptime())}
┈──────────────────────── •
                        *MENU BOT*
┈──────────────────────── •

✦ d1 = kedai-panel.my.id
✦ d2 = r0ulxye4.my.id
✦ d3 = cpanel-vip.my.id (khusus cpanel)
✦ d4 = panelprivv.xyz
✦ d5 = tokopanellku.my.id

Cara create ketik .domain

[ *Rules* ]
𝙎𝙚𝙨𝙖𝙢𝙖 𝙈𝙚𝙢𝙗𝙚𝙧 𝘿𝙞 𝙇𝙖𝙧𝙖𝙣𝙜 𝙎𝙖𝙡𝙞𝙣𝙜 𝘿𝘿o𝙎
Dilarang Menyebar Luaskan Link Domain
┈──────────────────────── •`;
  
  Manz.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m });
}

break

case "domain": {
if (!isOwner && !isSeler) return m.reply("Fitur khusus Reseller Subdomain")
const text12 = `
┈──────────────────────── •

.d1 hostname|ip

contoh : .d1 Azariastore|0.0.0.0
┈──────────────────────── •
`;
  Manz.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m });
}

break

 case 'd1': {
 
    if (!isAdmin && !isOwner) return reply("Fitur Khusus Resseler Subdomain Azariastore, Mau join cuman 10k aja\n Minat?pm Azariastore\nwa.me/62882008689313")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur khusus group")
function subDomain1(host, ip) {
  return new Promise((resolve) => {
    let zone = "5d00f56aee3afd9cc4e0666bc8f23746";
    let apitoken = "mjR4BdiOo6aFO3uPl8BTgZIgOMH3asLbgVsOpEfO";
    let tld = "kedai-panel.my.id";
    axios
      .post(
        `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
        { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
        {
          headers: {
 Authorization: "Bearer " + apitoken,
 "Content-Type": "application/json",
          },
        }
      )
      .then((e) => {
        let res = e.data;
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("*Format salah!*\nPenggunaan:\n.d1 hostname|0.0.0.0");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*SUCCES CREATE*
───────────────────────
Hostname : ${['name']}
IP : ${e['ip']}
Link : ${e['name']}
───────────────────────
Create by Azariabotz`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
 break
           
           case 'd2': {
    if (!isAdmin && !isOwner) return reply("Fitur Khusus Resseler Subdomain Azariastore, Mau join cuman 10k aja\n Minat?pm Azariastore\nwa.me/62882008689313")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur khusus group")
 function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c2c8ddf4f1bfd0d0c11eb0ed83a634f9";
               let apitoken = "RHmElwWM5pEb3HsWi82uramdhi9wzDsaU8F9JV6F";
               let tld = "r0ulxye4.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("*Format salah!*\nPenggunaan:\n.d1 hostname|0.0.0.0");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*SUCCES CREATE*
───────────────────────
Hostname : ${['name']}
IP : ${e['ip']}
Link : ${e['name']}
───────────────────────
Create by Azariabotz`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
         
 break
           
           case 'd3': {
    if (!isAdmin && !isOwner) return reply("Fitur Khusus Resseler Subdomain Azariastore, Mau join cuman 10k aja\n Minat?pm Azariastore\nwa.me/62882008689313")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur khusus group")           
function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "891a2e5d4ac5b3db4fbcef8d9088ad38";
               let apitoken = "V2BCJ-jhHXQlkN5-_Jv-CuXEtJbLT9fo7NWAlMK2";
               let tld = "cpanel-vip.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("*Format salah!*\nPenggunaan:\n.d1 hostname|0.0.0.0");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*SUCCES CREATE*
───────────────────────
Hostname : ${['name']}
IP : ${e['ip']}
Link : ${e['name']}
───────────────────────
Create by Azariabotz`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
break
           
           case 'd4': {
    if (!isAdmin && !isOwner) return reply("Fitur Khusus Resseler Subdomain Azariastore, Mau join cuman 10k aja\n Minat?pm Azariastore\nwa.me/62882008689313")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur khusus group")           
function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "03f3569e809aa63eb40d842af3ddb523";
               let apitoken = "kLS7qdEt9zuC9UJr2u5ok5LsPaKKk0p0vuuTgmEo";
               let tld = "panelprivv.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("*Format salah!*\nPenggunaan:\n.d1 hostname|0.0.0.0");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*SUCCES CREATE*
───────────────────────
Hostname : ${['name']}
IP : ${e['ip']}
Link : ${e['name']}
───────────────────────
Create by Azariabotz`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
break
           
           case 'd5': {
    if (!isAdmin && !isOwner) return reply("Fitur Khusus Resseler Subdomain Azariastore, Mau join cuman 10k aja\n Minat?pm Azariastore\nwa.me/62882008689313")
if (Manz.onlygc = true)
if (!isGroup) return m.reply("Fitur khusus group")           
function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5f4a582dd80c518fb2c7a425256fb491";
               let apitoken = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
               let tld = "tokopanellku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("*Format salah!*\nPenggunaan:\n.d1 hostname|0.0.0.0");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e['success']) reply(`*SUCCES CREATE*
───────────────────────
Hostname : [0]
IP : ${e['ip']}
Link : ${e['name']}
───────────────────────
Create by Azariabotz`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
break;
//===========[ PUSHKONTAK ]==========

break
 case "pushkontakmenu": {
  if (!isOwner) return reply(`Khusus Owner Aja`)
  const text12 = `┈──────────────────────── •
                        *INFO BOT*
┈──────────────────────── •
   • Bot Name : ${namabot} 
   • Creator : ${nameCreator}
   • Creator Number: @${owner.split("@")[0]}
   • Runtime : ${runtime(process.uptime())}
┈──────────────────────── •
                        *MENU BOT*
┈──────────────────────── •

• cekidgc
• pushkontakv1
• pushkontakv2
• pushkontakv3
• pushkontakv4
• savecontactv1
• savecontactv2
• jpm (hidetag)
• jpm2 (no hidetag)
• autojpm

┈──────────────────────── •`;
  
  Manz.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m });
}

break
case "cekidgc": {
if (!isOwner) return m.reply("Fitur Khsus Owner")
let getGroups = await Manz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await Manz.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}

break
case "jpm": case "post": {
if (!isOwner) return m.reply("Fitur Khsus Owner")
if (!text) return reply(`*Penggunaan Salah*\n\nCara penggunaan\n${prefix+command}\n\nJeda 1000 =1 Detik`)
await reply("_Loading.._")
let getGroups = await Manz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Manz.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Manz.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await Manz.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Manz.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("Berhasil Dilakukan ✅")
}

break
case 'jpm2':  {
if (!isOwner) return m.reply("Fitur Khsus Owner")
if (!text) return reply(`*Penggunaan Salah*\n\nCara penggunaan\n${prefix+command}\n\nJeda 1000 =1 Detik`)
await reply("_Loading..._")
let getGroups = await Manz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Manz.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Manz.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Manz.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
await sleep(text.split('|')[1])
} else {
await Manz.sendMessage(xnxx, { text: text.split('|')[0] })
await sleep(text.split('|')[1])
}}
reply("JPM Berhasil Dilakukan ✅")
}

break
case "savecontactv1": {
if (!isRegistered) return reply(`Kamu belum daftar!\nSilahkan daftar dengan cara *${prefix}daftar nama|umur!*`)
    if (!isOwner) return m.reply('Fitur Khusus Owner')
if (!text) return m.reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan`)
await m.reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = m.isGroup? await haikal.groupMetadata(from).catch(e => {}) : ""
const groupOwner = m.isGroup? groupMetadata.owner : ""
const participantts = m.isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
m.reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
m.reply(util.format(err))
} finally {
await Manz.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}

break;
//==============================
case "owner": {
const repf = await Manz.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
Manz.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih ${command}`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "listowner": {
   if (!isOwner) return reply(`Khusus Owner aja`);
const repf = await Manz.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
Manz.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, ini list admin yang ada di database`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "listadmin": {
   if (!isOwner) return reply(`Khusus Owner aja`);
const repf = await Manz.sendMessage(from, { 
contacts: { 
displayName: `${list2.length} Kontak`, 
contacts: list2 }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
Manz.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, ini list admin yang ada di database`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
 case "linklog": {
  if (!isOwner) return reply(`Khusus Owner Aja`);
  const text12 = `*Hi @${sender.split("@")[0]} 👋*

▭▬▭( *LINK LOGIN PANEL SERVER 1* )▭▬▭

*LINK LOGIN :*

${domain}
▬▭▬▭▬▭▬▭▬▭▬▭▬`;
  
  Manz.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m });
}
break;
  case "kick": {
if (!isOwner) return reply(mess.only.premium)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Manz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break    
  case "hidetag": {
if (!isOwner) return reply(`Khusus Owner Aja`)
if (!isGroup) return reply(mess.only.group)
if (!isBotAdmins) return reply(mess.only.badmin)
if (!q) return reply(`Teks?`)
global.hit = q
Manz.sendMessage(from, { text : global.hit ? global.hit : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break

case "panel": {
const owned = `62895391640324@s.whatsapp.net`
const text12 = `*Hi @${sender.split("@")[0]} 👋*

CARA ADD USER PANEL :
ram user,nomer

contoh Server : 1gb Azariastore,628xxxxx

Powered By *Azariastore*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Manz.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "bot": {
  const owned = `62895391640324@s.whatsapp.net`;
  const responseText = `Bot aktif kak @${sender.split("@")[0]} 🫡`;
  
  Manz.sendMessage(from, {
    text: responseText,
    contextInfo: {
      mentionedJid: [sender, owned],
      forwardingScore: 9999,
      isForwarded: true
    }
  }, { quoted: m });
}
break;
    case 'public': {
    if (!isOwner) return reply(`lu bukan owner gausah sok asik`);
    Manz.public = true;
    reply(`*Mode Public diaktifkan oleh Tuan! ✅*`);
}
break;

case 'self': {
    if (!isOwner) return reply(`Lu bukan owner ga usah sok asik`);
    Manz.public = false;
    reply(`*Mode Self diaktifkan oleh Tuan! ✅*`);
}
break;
case 'totag': {
    if (!isOwner) return reply(`lu bukan owner jangan sok asik`);
    if (!isBotAdmins) return reply(mess.only.badmin);
    
    if (!m.quoted) return reply(`Reply pesan dengan caption ${prefix + command}`);
    
    const mentionedUsers = participants.map(a => a.id);
    Manz.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: mentionedUsers });
}
break
case "addprem": {
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283872605023`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknyi = await Manz.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknyi.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/admin.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Reseller Subdomain!!!`)
}
break
case "delprem":
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283872605023`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = Admin.indexOf(ya)
Admin.splice(unp, 1)
fs.writeFileSync('./all/database/admin.json', JSON.stringify(Admin))
reply(`Nomor ${ya} Telah Di Hapus Reseller Subdomain!!!`)
break
case "addseler":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283872605023`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Manz.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
seler.push(prrkek)
fs.writeFileSync("./all/database/seler.json", JSON.stringify(seler))
reply(`Nomor ${prrkek} Telah Menjadi Reseller Panel!`)
}
break
case "delseler":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283872605023`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = seler.indexOf(ya)
seler.splice(unp, 1)
fs.writeFileSync("./all/database/seler.json", JSON.stringify(seler))
reply(`Nomor ${ya} Telah Di Hapus Dari Reseller Panel!`)
}
break
case "addowner":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283872605023`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknyi = await Manz.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknyi.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
ownerNumber.push(bnnd)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
}
break
case "delowner":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283872605023`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = ownerNumber.indexOf(ya)
ownerNumber.splice(unp, 1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(ownerNumber))
reply(`Nomor ${ya} Telah Di Hapus Dari Owner!!!`)
}
break
default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
Manz.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})