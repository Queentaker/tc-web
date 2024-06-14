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
      <div class="flex flex-col items-center font-normal font-sans shadow-sm">

        <div class="relative w-16 h-16 ">
          <div class="w-full pb-[100%] relative">
            <a href={this.link}>
            <img
              src={this.imageSrc}
              alt={this.techTitle}
              class="absolute w-full h-full object-contain"
            />
            </a>
          </div>
        </div>
        <a href={this.link} class="no-underline  text-inherit">
        <p class="mt-2 text-lg text-center">{this.techTitle}</p>
        </a>

      </div>
    );
  }
}
