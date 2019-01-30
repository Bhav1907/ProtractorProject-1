import { browser, ElementFinder, element, by, ExpectedConditions, ElementArrayFinder, protractor } from "protractor";
import { ActionLibrary } from "../utilities/action-library";
import { By } from 'selenium-webdriver';
import { String } from 'typescript-string-operations';
import { relative } from "path";
import { BrowserStack } from "protractor/built/driverProviders";
import { async } from "q";


export class BasePage {
    actions: ActionLibrary;
    readonly applicationUrl: string = "https://openweathermap.org/";

    constructor() {
        this.actions = new ActionLibrary();
    }

    public async getPageTitle() {
        return await this.actions.getPageTitle("Page Title");
    }
  
}
