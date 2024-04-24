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

  render() {
    return (
      <div class="flex flex-col items-center">
      <div
      class="relative w-20 h-20 items-center justify-center rounded-full" // Increased padding for a larger circle
      style={{ backgroundColor: this.iconColor }}
      >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-16 w-16">
          <path d="M40 52a12 12 0 1 0 0-24 12 12 0 1 0 0 24zm40-12c0 16.4-9.85 30.5-24 36.65v43.9c9.4-5.45 20.35-8.55 32-8.55h48c17.65 0 32-14.35 32-32v-3.35C153.85 70.5 144 56.4 144 40c0-22.1 17.9-40 40-40s40 17.9 40 40c0 16.4-9.85 30.5-24 36.65V80c0 35.35-28.65 64-64 64H88c-17.65 0-32 14.35-32 32v3.35c14.15 6.15 24 20.25 24 36.65c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-16.4 9.85-30.5 24-36.65V176 76.65C9.85 70.5 0 56.4 0 40C0 17.9 17.9 0 40 0s40 17.9 40 40zm116 0a12 12 0 1 0 -24 0 12 12 0 1 0 24 0zM40 228a12 12 0 1 0 0-24 12 12 0 1 0 0 24z"/>
        </svg>
      </div>
      </div>
    );
  }
}