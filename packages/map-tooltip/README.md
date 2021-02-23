# `map-tooltip`

## Documentation
### Props
- propertiesFilter (Array): filter displayed properties, expects an array like this: 
```
[
  {
    field_name: "ori_parcel_id",
    display_name: "SL_ID",
    type: "string"
  },
  {
    field_name: "colour",
    display_name: "Conformance",
    type: "legend/color"
  },
  {
    field_name: "ori_crop_id",
    display_name: "SNAR_CODE",
    type: "reference/crop"
  }
],
```

## Install

```
npm install @eox/map-tooltip
```
or
```
<link rel="stylesheet" href="https://unpkg.com/@eox/map-tooltip/dist/map-tooltip.css">
<script src="https://unpkg.com/@eox/map-tooltip/dist/map-tooltip.umd.js"></script>
```
