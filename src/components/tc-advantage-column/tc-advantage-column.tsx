import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'advantage-column',
  styleUrl: 'tc-advantage-column.css',
  shadow: true
})
export class AdvantageColumn {
  @Prop() iconName: string;  // Prop to accept icon name
  @Prop() iconColor: string;
  @Prop() advantageTitle: string;
  @Prop() advantageText: string;

  render() {
    return (
      <div class="flex flex-col items-center flex-1">
        <div class="flex flex-col items-center justify-center px-4 py-5 rounded-full"
             style={{ backgroundColor: this.iconColor }}>
          <ion-icon name={this.iconName}> </ion-icon> 
        </div>
        <h3 class="text-2xl font-bold">{this.advantageTitle}</h3>
        <p>{this.advantageText}</p>
      </div>
    );
  }
}
