import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'automated-exam-correction',
  styleUrl: 'tc-project.css',
  shadow: true
})

export class AutomatedExamCorrection {
  @Prop () projectTitle: string;
  @Prop () projectDescription: string;
  @State() showDetails: boolean = false;

  render() {
    return (
      <div class="px-3 py-2 border border-gray-200 border-solid shadow cursor-pointer rounded-xl md:p-4 md:px-6 ">
        <div class="flex flex-col items-start justify-between md:flex-row">
          <div>
            <h4 class="!m-0 text-xl font-normal md:text-3xl font-sans font-bold">{this.projectTitle}</h4>
            <div class="mt-2 text-lg font-sans font-plain">Entwicklung von innovativen Methoden zur automatisierten Korrektur von offenen Prüfungsaufgaben</div>
            <div class="hidden mt-2 md:block">
              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold  font-sans hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Details</button>
            </div>
          </div>
          <div class="flex flex-row flex-wrap gap-2 mt-2">
            <div class="px-2 py-1 text-gray-600 bg-gray-200 rounded-lg md:mt-0">Python</div>
            <div class="px-2 py-1 text-gray-600 bg-gray-200 rounded-lg md:mt-0">Data Science</div>
            <div class="px-2 py-1 text-gray-600 bg-blue-100 rounded-lg md:mt-0">Team Teaching Center</div>
          </div>
        </div>
        {this.showDetails && (
          <div class="pt-4 mt-4 border-t border-gray-200">
            <div class="flex flex-col gap-8 md:gap-16 md:flex-row">
              <div class="flex-initial md:w-[400px]">
                <div class="relative">
                  <img alt="Project Image" src="/path/to/your/image.png"></img>
                </div>
              </div>
              <div class="flex-1">
                <p class="prose prose-lg max-w-none">Studierende können in offenen Prüfungsaufgaben wie Freitext und Zeichnungen demonstrieren, dass sie ein Thema verstanden haben, und nicht nur Definitionen auswendig kennen.
                  Offene Prüfungsaufgaben sind jedoch schwierig und aufwändig umzusetzen, da sie einen grossen Korrekturaufwand mit sich bringen, und eine faire und einheitliche Korrektur sichergestellt werden muss.
                  Im Rahmen eines innovativen Lehrprojektes evaluieren und entwickeln wir Tools und Methoden, die den Korrekturprozess von solchen Aufgaben
                  mittels Statistik/Machine Learning unterstützen können (z.B. mittels Korrekturvorschlägen basierend auf maschinellem Verständnis von Freitext).</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
