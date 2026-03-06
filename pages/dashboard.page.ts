import { BasePage } from './base.page';

export class DashboardPage extends BasePage {
    private USER_PROFILE = '.user-profile';
    private LOGOUT_BUTTON = '#logout';

    async isVisible() {
        return await this.page.isVisible(this.USER_PROFILE);
    }

    async logout() {
        await this.page.click(this.LOGOUT_BUTTON);
    }
}
