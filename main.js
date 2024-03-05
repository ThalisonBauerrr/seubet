//nodemon -x 'node main.js || copy /b main.js +,,'
require('dotenv').config()
const users = ["bauerthalison"]
const creedroomz = require('./creedroomz.js')
//const user1 = creedroomz.mainz(process.env.EMAIL,process.env.PASSWORD)
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')
const bot = new Telegraf(process.env.BOT_TOKEN)
const chokidar = require('chokidar');

bot.on(message("text"), async(ctx) =>{
    console.log(ctx.message.text)
    if(ctx.message.text === "/iniciar"){
        
        if(users.includes(ctx.message.from.username)){
            if(creedroomz.browserAtivo === false){
                console.log(ctx.message.from.username+" CADASTRADO")
                var user = creedroomz.logar(process.env.EMAIL,process.env.PASSWORD)
                user = ctx.message.from.username
            }else{
                console.log("🎰PROGRAMA JÁ ESTA OPERANDO")
            }
            
        }else{
            ctx.reply("USUARIO NÃO CADASTRADO")
            console.log("USUARIO NAO CADASTRADO")
        }
        
    }

    if(ctx.message.text === "/parar"){
        console.log(browserAtivo)
        if(browserAtivo === true){
            user = await fecharBrowser()
        }else{
            console.log("🎰PROGRAMA JÁ ESTA FECHADA")
        }
        
    }    
    if(ctx.message.text === "/resumo"){
        console.log(browserAtivo)
        if(browserAtivo === true){
            user = await fecharBrowser()
        }else{
            console.log("🎰PROGRAMA JÁ ESTA FECHADA")
        }
        
    }
    //ctx.reply("🎰PROGRAMA ATIVO")
})
bot.launch()

console.log('🎰PROGRAMA ATIVO')