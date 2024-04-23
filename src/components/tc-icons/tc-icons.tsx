import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tc-benefits-section',
    styleUrl: 'tc-icons.css',

  shadow: true
})
export class BenefitsSection {

  @Prop() benefits: { imageSrc: string, title: string, description: string }[];

  render() {
    return (
      <div class="flex flex-wrap justify-center gap-4 p-4">
        {this.benefits.map((benefit) =>
          <div class="max-w-sm rounded overflow-hidden shadow-lg p-4">
            <img class="w-10 h-10 mx-auto" src={benefit.imageSrc} alt={benefit.title} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{benefit.title}</div>
              <p class="text-gray-700 text-base">
                {benefit.description}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}