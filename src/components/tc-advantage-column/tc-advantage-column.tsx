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
        <div class="flex flex-col w-36 h-36 rounded-full bg-blue-600  items-center justify-center"
        >
          
          <svg class = "h-20 w-21" xmlns={this.svgXmlns} viewBox={this.svgViewBox}>
            <path d={this.svgPath}
              fill= "white"
            />
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
