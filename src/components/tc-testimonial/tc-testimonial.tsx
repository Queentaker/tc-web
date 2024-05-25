import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "tc-testimonial",
  styleUrl: "tc-testimonial.css",
  shadow: true,
})
export class MyTestimonial {
  @Prop() quote: string;
  @Prop() name: string;
  @Prop() role: string;
  @Prop() imageOnLeft: boolean = false;
  @Prop() imageSrc: string;
  @Prop() pro: string;
  @Prop() altText: string = "Picture";
  @Prop() backgroundColor: string = "#FFFFFFF";

  render() {
    const imageSection = (
      <div
        class={{
          "order-1 md:order-1": this.imageOnLeft,
          "order-2 md:order-2": !this.imageOnLeft,
          "w-full md:w-[330px]": true,
          "px-4": true,
        }}
      >
        <img
          alt={this.altText}
          src={this.imageSrc}
          class="drop-shadow-2xl object-cover max-w-full h-auto"
        />
      </div>
    );

    const textSection = (
      <div
        class={{
          "flex-1": true,
          "order-2 md:order-2": this.imageOnLeft,
          "order-1 md:order-1": !this.imageOnLeft,
          "px-4": true,
          "font-sans":true,
          "font-normal":true
        }}
      >
        <h3 class="text-2xl font-semibold">{this.pro}</h3>
        <blockquote
          class={{
            "text-lg": true,
            "m-0": true,
            "mb-1": true,
            "font-sans": true,
            "font-normal": true
          }}
          style={{ background: "z" }}
        >
          <span class="text-4xl text-gray-400">“</span>
          <p class="inline leading-loose">{this.quote}</p>
          <span class="text-4xl text-gray-400 leading-none">”</span>
        </blockquote>
        <div class="text-justify italic">
          <p>
            {this.name}, {this.role}
          </p>
        </div>
      </div>
    );

    return (
      <div class="flex flex-col items-center w-full gap-8 px-4 py-2 md:flex-row">
        {this.imageOnLeft ? imageSection : textSection}
        {this.imageOnLeft ? textSection : imageSection}
      </div>
    );
  }
}
