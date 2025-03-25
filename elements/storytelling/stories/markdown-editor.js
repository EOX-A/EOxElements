/**
 * Renders storytelling with text editor.
 */
import { html } from "lit";

export const MarkdownEditor = {
  args: {
    markdown: `---
cover-image: <img src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/214fb85ff18ec9bcf27740f14a7e955aaa138ed0/assets/ExampleViennaRiskbuildings-1742554563509.png" data-fallback-src="https://raw.githubusercontent.com/Itsman-AT/public-narratives/Itsman-AT/heat-risk-according-to-climate-scenarios/assets/Itsman-AT/ExampleViennaRiskbuildings-1742554563509.png" />
---

# Heat Risk Maps

## helloo 
<img src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/b0c30d850f866cbd8366d0e4639978a62e4079bb/assets/KlimaindizesWien-1742456280058.png" style="width: 100%; height: 100%;" data-fallback-src="https://raw.githubusercontent.com/Itsman-AT/public-narratives/Itsman-AT/heat-risk-according-to-climate-scenarios/assets/Itsman-AT/KlimaindizesWien-1742456280058.png" />

## Map Tour <!--{ as="eox-map" mode="tour" }-->

### <!--{ layers='[{"type":"Tile","properties":{"id":"osm"},"source":{"type":"OSM"}}]' center=[16.37349215538594,48.208361321627784] zoom="11" animationOptions="{duration:500}" }-->
 
#### Problem & Initial situation

Extreme heat during the day and no cooling at night:
In Vienna, the number of hot days and tropical nights is continuously increasing.
<img src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/b0c30d850f866cbd8366d0e4639978a62e4079bb/assets/KlimaindizesWien-1742456280058.png" style="width: 100%; height: 100%;" data-fallback-src="https://raw.githubusercontent.com/Itsman-AT/public-narratives/Itsman-AT/heat-risk-according-to-climate-scenarios/assets/Itsman-AT/KlimaindizesWien-1742456280058.png" />

*Source: Climate Status Report Austria 2023, Climate Review Vienna, Ed. CCCA 2024.*

###
**High population density** and the **urban heat island effect** are forcing cities to adapt and take measures to combat the growing threat.

**However, adaptation measures are often only effective locally, and resources are limited**.

###
Vulnerable groups in particular suffer from persistently high temperatures and heat stress - with serious consequences for their health.

###
Among a multitude of **pressing questions**, these can also be found:
- Where are measures to reduce heat stress necessary?
- Which groups of people should be better protected/supported through targeted measures?
- Where is the most urgent need for action?
- Which areas should be prioritized?
- ...

###
In recent years, **various studies have been conducted to analyze the urban climate and heat vulnerability**. Examples include the **Vienna Urban Climate Analysis (2020)** and the **Urban Heat Vulnerability Index (UHVI) Vienna (2019).
<img src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/a6074f597bee163dce11a0de69ac2bc71f1f4add/assets/stadtklimaanalyse-karte-001-1742459897452.png" style="width: 100%; height: 100%;" data-fallback-src="https://raw.githubusercontent.com/Itsman-AT/public-narratives/Itsman-AT/heat-risk-according-to-climate-scenarios/assets/Itsman-AT/stadtklimaanalyse-karte-001-1742459897452.png" />

*Source: Urban Climate Analysis Vienna, Climate Analysis Map, 2020, City of Vienna - Urban Development and Planning, Weatherpark GmbH, INKEK GmbH*

<img src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/52ac3fd29e2d4aaba2255e88cc426362c13f02ce/assets/UHVI-1742459936283.PNG" style="width: 100%; height: 30%;" data-fallback-src="https://raw.githubusercontent.com/Itsman-AT/public-narratives/Itsman-AT/heat-risk-according-to-climate-scenarios/assets/Itsman-AT/UHVI-1742459936283.PNG" />

*Source: Illustration by orf.at based on data from the City of Vienna (energie.wien.gv.at), ECOTEN, OpenStreetMap*


### So what's missing?

### 1. Flexibility & Up-to-dateness
#### Heat ≠ heat risk

While some people enjoy sitting in the sun even at 30°C, for others this already represents a health risk.
**Static maps calculated once** provide a solid foundation, but can lead to **further questions and required investigations** that are not immediately available. **Updates** due to changes in the initial situation (land use & development, population structure, etc.) or variable spatial resolution are not possible.

### 2. Consistency
Due to the **use of different input data, calculation methods or different objectives**, studies with related content can show inconsistencies (severity of heat stress, need for action, etc.) and lead to decision-making problems.

### 3. Transferability
Detailed studies usually require **tailored solutions for individual cities**. To date, there is no uniform methodology for calculating heat risk that would make it available for many cities.

###
**Flexible, consistent and transferable heat risk maps** are not only a support for **cities and municipalities**, but also for **businesses and organizations** that need to assess future heat risks.


## Solution "Heat Risk Maps"

According to the IPCC risk concept (6th Assessment Report (AR6) of Working Group 2), a **risk consists of hazard, exposure and vulnerability**.

<img src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/4988d1aeb84df8b73bdb6692cd30f5c547074cc4/assets/Riskpropeller-1742468288131.png" style="width: 100%; height: 60%;" data-fallback-src="https://raw.githubusercontent.com/Itsman-AT/public-narratives/Itsman-AT/heat-risk-according-to-climate-scenarios/assets/Itsman-AT/riskpropeller-1742468288131.png" />


Through a **sound risk assessment**, future developments can be shaped, effective investments can be made and **measures can be placed where they are needed**.
To achieve this, various data from different disciplines must be comprehensively compiled and linked together.

The developed heat risk algorithm combines **current satellite information**, such as building structure, degree of soil sealing or tree population, with **population statistics** and high-resolution **climate data** tailored to Austria.

<img src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/d5b9ad0d69524f62e0647147174007da4c56111c/assets/Datasourcessketch-1742553530237.png" data-fallback-src="https://raw.githubusercontent.com/Itsman-AT/public-narratives/Itsman-AT/heat-risk-according-to-climate-scenarios/assets/Itsman-AT/Datasourcessketch-1742553530237.png" />


The methodology allows the heat risk maps to be calculated repeatedly when new or updated data sets are available, thus making the **impacts of adaptation measures and urban development visible**.

It also offers the opportunity to incorporate future spatial planning scenarios or demographic developments and anticipate future impacts. While the use of open-source data forms the basis, available city-specific data can enable higher quality.

<img src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/3fccfa1e48b774193885976c416e71b33919e68e/assets/ExampleViennaSat-1742554565946.png" data-fallback-src="https://raw.githubusercontent.com/Itsman-AT/public-narratives/Itsman-AT/heat-risk-according-to-climate-scenarios/assets/Itsman-AT/ExampleViennaSat-1742554565946.png" />
<img src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/214fb85ff18ec9bcf27740f14a7e955aaa138ed0/assets/ExampleViennaRiskbuildings-1742554563509.png" data-fallback-src="https://raw.githubusercontent.com/Itsman-AT/public-narratives/Itsman-AT/heat-risk-according-to-climate-scenarios/assets/Itsman-AT/ExampleViennaRiskbuildings-1742554563509.png" />


The heat risk maps thus make it possible to determine the **spatial distribution of heat risk** for a **defined population group, infrastructure, etc.** under **selected climatic conditions**.

**Selection of possible heat hazards**:
- Daily maximum air temperature > 25°C / 30°C / 35°C
- Daily minimum air temperature > 20°C
- X consecutive days with daily maximum air temperature > Y°C
- under current or future climate conditions
- ... further climate indices

**Definition of vulnerable groups**:
- Persons younger than 14 years
- People older than 65 years
- Locations of vulnerable social infrastructure (kindergartens, hospitals, nursing homes, etc.)
- Low-income people
- Consideration of existing cool spots or similar cool areas
- ... further factors increasing/reducing vulnerability


## Use cases
Due to the flexibility of data selection, the heat risk can be calculated for a variety of use cases, including:
- **Heat action and heat protection plans**: Integrating heat risk maps can help tailor measures to areas at risk.
- **Urban development concepts**: Heat risk maps provide valuable information for spatial planning and urban development in order to make your city livable for the future.
- **Prioritization of adaptation measures**: Comparison of areas within cities
- **Updating current heat risk information**: Changing climate conditions, urban development, and changing population statistics render outdated maps unusable. The developed algorithm enables straightforward updates.
- **Identifying locations with future risks**: Organizations and companies that deal with vulnerable groups can identify locations with high or low, current and future heat risk, which is crucial for planning interventions and responses.




## Quality control
The **timeliness of the static input data** represents a key quality component. A **trend analysis of surface temperature** can identify changes in a city's land use and development structure. The timeliness of the input data must be verified at these locations.

### High-resolution surface temperature
<img src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/1161fc4afe6b170fb033c111d7688186563af72f/assets/LST-1742473151887.PNG" style="width: 40%; height: 40%;" data-fallback-src="https://raw.githubusercontent.com/Itsman-AT/public-narratives/Itsman-AT/heat-risk-according-to-climate-scenarios/assets/Itsman-AT/LST-1742473151887.PNG" />

Source: OHB SE (https://www.ohb.de/)

-

### Trend analysis of surface temperature

<img src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/a6890d9562a2c1bba56e136177bff4cfec398cc2/assets/OHB-1742553790083.png" data-fallback-src="https://raw.githubusercontent.com/Itsman-AT/public-narratives/Itsman-AT/heat-risk-according-to-climate-scenarios/assets/Itsman-AT/OHB-1742553790083.png" />

Source: OHB SE (https://www.ohb.de/)

# Open questions
<img src="https://raw.githubusercontent.com/GTIF-Austria/public-narratives/214fb85ff18ec9bcf27740f14a7e955aaa138ed0/assets/ExampleViennaRiskbuildings-1742554563509.png" data-fallback-src="https://raw.githubusercontent.com/Itsman-AT/public-narratives/Itsman-AT/heat-risk-according-to-climate-scenarios/assets/Itsman-AT/ExampleViennaRiskbuildings-1742554563509.png" />

- Are heat risk maps currently being used, and if so, by whom and for what purpose?
- For which groups/infrastructure/... should a heat risk be calculable?
- At what spatial accuracy should heat risk maps be available? (Data availability on building/renovation standards, etc.)
- What could heat risk maps be used for in the future?
    
    `,
  },
  render: (args) => html`
    <eox-storytelling
      id="markdown-editor"
      show-nav
      show-editor="closed"
      markdown=${args.markdown}
      @upload:file=${(e) => {
        const detail = e.detail;
        const { file, update } = detail;

        // Check if file is larger than 1MB
        if (file.size > 1024 * 1024) {
          update(null, null, new Error("File size must be less than 1MB"));
          return;
        }

        const reader = new FileReader();
        reader.onload = () => {
          const base64Url = reader.result;
          update(base64Url);
        };
        reader.readAsDataURL(file);
      }}
    ></eox-storytelling>
  `,
};

export default MarkdownEditor;
