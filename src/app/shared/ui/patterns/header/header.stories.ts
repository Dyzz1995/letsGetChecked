// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { HttpClientModule } from '@angular/common/http';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderComponent } from './header.component';

export default {
  title: 'Beeyard-DS/Header',
  component: HeaderComponent,
  // argTypes: {},
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule, AngularSvgIconModule.forRoot()],
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Default = Template.bind({
  userName: 'John Doe',
});
