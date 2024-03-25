/**
 * Renders storytelling along with navigation.
 */
import { html } from "lit";

export const Navigation = {
  args: {
    markdown: `
## What is Lorem Ipsum? <!--{#what}-->
Lorem Ipsum is simply dummy text of the **printing and typesetting** industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and **scrambled it to make a type specimen book.** It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Sustainable Development Goal 13 is to _**“take urgent action to combat climate change and its impacts”**_, [according to the United Nations](https://www.un.org/sustainabledevelopment/climate-change/).

The visualizations and data below present the global perspective on where the world stands today and how it has changed over time. Further data and statistics can be found at the Our World in Data topic pages on CO2 and Greenhouse Gas Emissions and [Climate Change](https://ourworldindata.org/climate-change).

The [UN has defined](https://unstats.un.org/sdgs/indicators/Global%20Indicator%20Framework%20after%202023%20refinement_Eng.pdf) 5 targets and 8 indicators for SDG 13. Targets specify the goals and indicators represent the metrics by which the world aims to track whether these targets are achieved. Below we quote the original text of all targets and show the data on the agreed indicators.

### List of targets and indicators

- [Target 13.1Strengthen resilience and adaptive capacity to climate-related disasters](https://ourworldindata.org/sdgs/climate-action#target-13-1-strengthen-resilience-and-adaptive-capacity-to-climate-related-disasters)
- [SDG Indicator 13.1.1Deaths and injuries from natural disasters](https://ourworldindata.org/sdgs/climate-action#sdg-indicator-13-1-1-deaths-and-injuries-from-natural-disasters)
- [SDG Indicator 13.1.2National disaster risk management](https://ourworldindata.org/sdgs/climate-action#sdg-indicator-13-1-2-national-disaster-risk-management)
- [SDG Indicator 13.1.3Local disaster risk management](https://ourworldindata.org/sdgs/climate-action#sdg-indicator-13-1-3-local-disaster-risk-management)
- [Target 13.2Integrate climate change measures into policy and planning](https://ourworldindata.org/sdgs/climate-action#target-13-2-integrate-climate-change-measures-into-policy-and-planning)
- [SDG Indicator 13.2.1Integration of climate change into national policies](https://ourworldindata.org/sdgs/climate-action#sdg-indicator-13-2-1-integration-of-climate-change-into-national-policies)
- [SDG Indicator 13.2.2Total greenhouse gas emissions per year](https://ourworldindata.org/sdgs/climate-action#sdg-indicator-13-2-2-total-greenhouse-gas-emissions-per-year)
- [Target 13.3Build knowledge and capacity to meet climate change](https://ourworldindata.org/sdgs/climate-action#target-13-3-build-knowledge-and-capacity-to-meet-climate-change)
- [SDG Indicator 13.3.1Education on climate change](https://ourworldindata.org/sdgs/climate-action#sdg-indicator-13-3-1-education-on-climate-change)
- [Target 13.aImplement the UN Framework Convention on Climate Change](https://ourworldindata.org/sdgs/climate-action#target-13-a-implement-the-un-framework-convention-on-climate-change)
- [SDG Indicator 13.a.1Green Climate Fund mobilization of $100 billion](https://ourworldindata.org/sdgs/climate-action#sdg-indicator-13-a-1-green-climate-fund-mobilization-of-100-billion)
- [Target 13.bPromote mechanisms to raise capacity for planning and management](https://ourworldindata.org/sdgs/climate-action#target-13-b-promote-mechanisms-to-raise-capacity-for-planning-and-management)
- [SDG Indicator 13.b.1Support for planning and management in least-developed countries](https://ourworldindata.org/sdgs/climate-action#sdg-indicator-13-b-1-support-for-planning-and-management-in-least-developed-countries)

| Country/area         | 2018       |
| -------------------- | ---------- |
| Iceland              | 3,505.6 kg |
| Qatar                | 2,472.7 kg |
| United Arab Emirates | 2,195.1 kg |
| Singapore            | 1,741.0 kg |
| Malta                | 991.6 kg   |
| New Zealand          | 640.3 kg   |
| Mauritius            | 599.8 kg   |
| Ireland              | 574.1 kg   |
| Switzerland          | 513.3 kg   |
| Australia            | 495.9 kg   |

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
## Where does it come from? <!--{#where}-->
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
`,
  },
  render: (args) => html`
    <!-- Render eox-storytelling with attribute as comment markdown. -->
    <eox-storytelling
      show-nav
      id="markdown-str"
      markdown=${args.markdown}
    ></eox-storytelling>
  `,
};

export default Navigation;
