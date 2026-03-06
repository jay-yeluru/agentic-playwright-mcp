import { BasePage } from './base.page';

export class LoginPage extends BasePage {
    private USERNAME_INPUT = '#username';
    private PASSWORD_INPUT = '#password';
    private LOGIN_BUTTON = '#login-submit';

    async login(username: string, password: string) {
        await this.page.fill(this.USERNAME_INPUT, username);
        await this.page.fill(this.PASSWORD_INPUT, password);
        await this.page.click(this.LOGIN_BUTTON);
    }
}
