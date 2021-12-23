// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SidebarComponent } from './sidebar.component';

export default {
  title: 'Beeyard-DS/Sidebar',
  component: SidebarComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule, AngularSvgIconModule.forRoot(), RouterTestingModule],
    }),
  ],
} as Meta;

const Template: Story<SidebarComponent> = (args: SidebarComponent) => ({
  props: args,
});

export const Default = Template.bind({});
