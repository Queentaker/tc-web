// src/components/tc-job-card/tc-job-card.tsx
import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "tc-job-card",
  styleUrl: "tc-job-card.css",
  shadow: true,
})
export class TcJobCard {
  @Prop() imageSrc: string;
  @Prop() jobTitle: string;
  @Prop() shortDescription: string;
  @Prop() detailedDescription: string;

  render() {
    return (
      <div class=" m-auto max-w-[90rem] p-4">
        <div class=" flex flex-col gap-16 md:gap-24 ">
          <div class="flex flex-col md:flex-row md:items-top">
            <div class="items-top flex-1 p-4">
              <h4 class="text-3xl font-bold m-0  font-sans">{this.jobTitle}</h4>
              <p class="text-xl mb-1 font-sans">{this.shortDescription}</p>
              <p class="font-sans">{this.detailedDescription}</p>
            </div>
            <div class=" items-center flex-1 p-4">
              <img
                src={this.imageSrc}
                alt={this.jobTitle}
                class="max-w-full h-auto   p-auto m-auto "
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
