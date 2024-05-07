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
      <div class="job-card-container m-auto max-w-[90rem] p-4">
        <div class="job-card-header"></div>
        <div class="job-card-content flex flex-col gap-16 md:gap-24">
          <div class="flex flex-col md:flex-row">
            <div class="job-card-text flex-1">
              <h4 class="text-3xl font-normal mb-2 font-sans">
                {this.jobTitle}
              </h4>
              <p class="text-xl mb-1 font-sans">{this.shortDescription}</p>
              <p class="font-sans">{this.detailedDescription}</p>
            </div>
            <div class="job-card-image relative flex-1 font-sans">
              <img
                src={this.imageSrc}
                alt={this.jobTitle}
                class="w-full h-auto max-h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
