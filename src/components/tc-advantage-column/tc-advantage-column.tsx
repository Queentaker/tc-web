import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "tc-advantage-column",
  styleUrl: "tc-advantage-column.css",
  shadow: true,
})
export class AdvantageColumn {
  @Prop() advantageTitle: string;
  @Prop() advantageText: string;
  @Prop() iconColor: string;
  @Prop() svgPath: string;
  @Prop() svgViewBox: string;
  @Prop() svgXmlns: string = "http://www.w3.org/2000/svg";

  render() {
    return (
      <div class="flex flex-col items-center">
        <div
          class="flex items-center justify-center rounded-full"
          style={{ backgroundColor: this.iconColor, padding: "20px" }}
        >
          <svg
            xmlns= {this.svgXmlns}
            viewBox={this.svgViewBox}
            class="h-16 w-16"
          >
            <path d={this.svgPath} />
          </svg>
        </div>
        <h3 class="text-2xl md:text-3xl font-sans mt-4">
          {this.advantageTitle}
        </h3>
        <p class="prose-lg font-sans mt-2">{this.advantageText}</p>
      </div>
    );
  }
}
 