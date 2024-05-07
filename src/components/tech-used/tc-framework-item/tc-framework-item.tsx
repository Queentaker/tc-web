import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "tc-framework-item",
  styleUrl: "tc-framework-item.css",
  shadow: true,
})
export class FrameworkItem {
  @Prop() imageSrc: string;
  @Prop() techTitle: string;

  render() {
    return (
      <div class="flex flex-col items-center">
        <div class="relative w-16 h-16">
          <div class="w-full pb-[100%] relative">
            <img
              src={this.imageSrc}
              alt={this.techTitle}
              class="absolute w-full h-full object-contain"
            />
          </div>
        </div>
        <p class="mt-2 text-lg text-center font-sans">{this.techTitle}</p>
      </div>
    );
  }
}
