import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'tc-favorite-tech',
  shadow: true,
  styleUrl: 'tc-favorite-tech.css',
})
export class TCFavoriteTech {

  @Prop() favTitle: string;
  @Prop({ mutable: true }) technologies: Array<{ imgSrc: string; name: string; description: string }>;

  render() {
    return (
      <div class="max-w-[90rem] mx-auto text-center">
        <h3 class="text-3xl md:text-4xl font-bold mb-12">{this.favTitle}</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
          {this.technologies.map((tech) =>
            <div class="flex flex-col items-center">
              <div class="w-full h-16 flex justify-center items-center">
                <img class="object-contain max-w-full max-h-full" src={tech.imgSrc} alt={tech.name} />
              </div>
              <p class="mt-2 text-lg">{tech.description}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
