import puppeteer from 'puppeteer';
import { BROWSER_OPTIONS_DEV, TAB_WAIT_2_REQUESTS } from '../config/config.js';
import chai from 'chai';
const {EMAIL, PASSWORD} = process.env


const browserOptions = BROWSER_OPTIONS_DEV
const pageOptions = TAB_WAIT_2_REQUESTS
const typeOptions = {delay: 100}
const should = chai.should()

const testLinkedinProfileName = async(profileURL, profileName)=>{
    await page.goto(profileURL, pageOptions)
    await page.waitForXPath('//h1')

    const perfilName = await page.$('h1')

    const fullName = await perfilName.evaluate(element => element.textContent)
    fullName.toLowerCase().should.contain(profileName)
}
let browser;
let page;

before(async ()=>{
    browser = await puppeteer.launch(browserOptions)
})

beforeEach(async ()=>{
    page = await browser.newPage();
})

afterEach(async ()=>{
    await page.close()
})

after(async () =>{
    await browser.close()
})

describe('Verficamos el ingreso a Linkedin',async ()=>{
    it('Login Test', async ()=>{
    
        await page.goto('https://www.linkedin.com/', pageOptions)
        await page.waitForXPath('//input[@autocomplete="username"]')
        const userNameInput = (await page.$x('//input[@autocomplete="username"]'))[0]
        await userNameInput.type(EMAIL, typeOptions)
        const passwordInput = (await page.$x('//input[@autocomplete="current-password"]'))[0]
        await passwordInput.type(PASSWORD, typeOptions)
        await passwordInput.press('Enter')
        await page.waitForNavigation(pageOptions)
        await page.waitForSelector('ul')
        const title = await page.title()
        title.should.contain('Feed | LinkedIn')
    })

    it('Scrapper test Anderson',()=>{testLinkedinProfileName(
        'https://www.linkedin.com/in/anderson-sinche-b316193b/', 
        'anderson sinche'
    )})
    
    it('Scrapper test Antony',()=>{testLinkedinProfileName(
        'https://www.linkedin.com/in/antony-palomino-8965571b1/', 
        'antony palomino'
     )})
})

