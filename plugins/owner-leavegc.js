let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('Byee Yuki akan pergi , , ! (≧ω≦)ゞ', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc', 'out', 'leave']
handler.tags = ['owner']
handler.command = /^(out|leavegc|leave)$/i

handler.rowner = true

export default handler