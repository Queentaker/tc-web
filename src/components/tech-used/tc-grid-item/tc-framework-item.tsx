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
  @Prop() width: string = "lg";

  render() {
    return (
      <div class={"flex flex-col items-center font-normal shadow-md font-sans m-2 lg:mx-24 "  }>
        
          <div class="relative w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 lg:mt-6">
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
          <a
            href={this.link}
            target="_blank"
            rel="noopener noreferrer"
            class="no-underline  text-inherit"
          >
            <p class="mt-2 text-base md:text-lg text-center">
              {this.techTitle}
            </p>
          </a>
        
      </div>
    );
  }
  private getPadding(): string {
    return "px-8 md:px-16 lg:px-32";
  }

  private getWidth(): string {
    switch (this.width) {
      case "sm":
        return "px-2 md:px-4 lg:px-8";
      case "md":
        return "px-4 md:px-8 lg:px-16";
      case "lg":
        return "px-8 md:px-16 lg:px-32";
      default:
        return "px";
    }
  }
}
