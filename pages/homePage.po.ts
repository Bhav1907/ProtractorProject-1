import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
import { By } from 'selenium-webdriver';
import { BasePage } from './base.po';

export class HomePage extends BasePage {
    readonly cityName: ElementFinder = element(by.xpath("//input[@id='q' and @placeholder='Your city name']"));
    readonly search: ElementFinder = element(by.xpath("//button[contains(text(),'Search')]"));
    readonly alertMessage: ElementFinder = element(by.xpath("//div[@class='alert alert-warning']"));
    readonly weatherCityName: ElementFinder = element(by.xpath("//div/h2[@class='weather-widget__city-name']"));
    readonly widgetTitle: ElementFinder = element(by.xpath("//h2[text()='Current weather and forecasts in your city']"));
    readonly currentLocation: ElementFinder = element(by.xpath("//button[@class='btn search-cities__lnk'][contains(text(),'Current location')]"));
    readonly widgetTemparature: ElementFinder = element(by.xpath("//div[@class='widget__temperature']"));
    readonly widgetGraphic: ElementFinder = element(by.xpath("//div[@class='widget__graphic']"));
readonly temparature :ElementFinder = element(by.xpath("//h3[@class='weather-widget__temperature']"))

    public async openUrl(url: string) {
        return await this.actions.get(url, "Opening url");
    }

    public async enterCityName(city: string) {
        return await this.actions.setText(this.cityName, city, "Enter city name");
    }

    public async clickOnSearch() {
        return await this.actions.click(this.search, "Click on search");
    }

    public async verifyErrorMessage(message: string) {
        let alertMessageText: string = (await this.alertMessage.getText()).trim();
        console.log("error: " + alertMessageText);
        if (alertMessageText.search(message.trim()) !== -1) {
            return true;
        }
        return false;
    }

    public async clickOnSearchResults(city: string) {
        let cityLink: ElementFinder = element(by.xpath("//div[@id='forecast_list_ul']//a[contains(text(),'" + city + "')]"));
        await this.actions.waitUntilElementVisible(cityLink, "Waiting for city to be present");
        await this.actions.click(cityLink, "City link");
    }

    public async verifyCityDetails(city: string) {
        await this.actions.waitUntilElementVisible(this.weatherCityName, "Waiting for city details to be present");
        if ((await this.weatherCityName.getText()).search(city) !== -1) {
            return true;
        }
        return false;
    }

    public async verifyElementPresentOnPage(elementToBeChecked: ElementFinder) {
        await this.actions.waitUntilElementVisible(elementToBeChecked, "Waiting for element to be present");
        await browser.executeScript('arguments[0].scrollIntoView()', elementToBeChecked);
        return await elementToBeChecked.isPresent();
    }

    public async getTemparature(){


    }


}