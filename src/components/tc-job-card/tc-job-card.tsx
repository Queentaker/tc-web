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
  @Prop() imageOnLeft: boolean = false; // Defaults to false if not provided

  render() {
    const imageClass = this.imageOnLeft ? "md:order-1" : "md:order-2";
    const textClass = this.imageOnLeft ? "md:order-2" : "md:order-1";

    return (
      <div class="m-2 max-w-[90rem] p-2 md:p-4 font-sans shadow-md font-normal">
        <div class="flex flex-col gap-16 md:gap-24">
          <div class="flex flex-col md:flex-row md:items-top">
            <div class={`items-center flex-1 p-1 md:p-4 order-1 ${imageClass}`}>
              <img
                src={this.imageSrc}
                alt={this.jobTitle}
                class="max-w-full h-auto p-auto m-auto"
              />
            </div>
            <div class={`items-top flex-1 p-4 order-2 ${textClass}`}>
              <h4 class="text-xl md:text-3xl font-semibold m-0">{this.jobTitle}</h4>
              <p class="text-l md:text-xl mb-1">{this.shortDescription}</p>
              <p>{this.detailedDescription}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
