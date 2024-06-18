import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "tc-framework-item",
  styleUrl: "tc-framework-item.css",
  shadow: true,
})
export class FrameworkItem {
  @Prop() imageSrc: string;
  @Prop() techTitle: string;
  @Prop() link: string;

  render() {
    return (
      <div class="flex flex-col items-center font-normal font-sans m-2">
        <div class ="shadow-md pt-2 relative w-16 md:w-64 flex flex-col items-center">
        <div class="relative w-8 h-8 md:w-16 md:h-16  ">
          <div class="w-full pb-[100%] relative">
            <a href={this.link} target="_blank" rel="noopener noreferrer">
            <img
              src={this.imageSrc}
              alt={this.techTitle}
              class="absolute w-full h-full object-contain"
            />
            </a>
          </div>
        </div>
        <a href={this.link} target="_blank" rel="noopener noreferrer" class="no-underline  text-inherit">
        <p class="mt-2 text-base md:text-lg text-center">{this.techTitle}</p>
        </a>
        </div>

      </div>
    );
  }
}
