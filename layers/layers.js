ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-9.969452, 41.427347, -5.023309, 44.501614]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_testshapes_1 = new ol.format.GeoJSON();
var features_testshapes_1 = format_testshapes_1.readFeatures(json_testshapes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_testshapes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_testshapes_1.addFeatures(features_testshapes_1);
cluster_testshapes_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_testshapes_1
});
var lyr_testshapes_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_testshapes_1, 
                style: style_testshapes_1,
                popuplayertitle: 'test-shapes',
                interactive: true,
                title: '<img src="styles/legend/testshapes_1.png" /> test-shapes'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_testshapes_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_testshapes_1];
lyr_testshapes_1.set('fieldAliases', {'Name': 'Name', 'X (Longitu': 'X (Longitu', 'Y (Latitud': 'Y (Latitud', 'Test 1': 'Test 1', 'Test 2': 'Test 2', });
lyr_testshapes_1.set('fieldImages', {'Name': '', 'X (Longitu': '', 'Y (Latitud': '', 'Test 1': '', 'Test 2': '', });
lyr_testshapes_1.set('fieldLabels', {'Name': 'header label - visible with data', 'X (Longitu': 'header label - visible with data', 'Y (Latitud': 'header label - visible with data', 'Test 1': 'header label - visible with data', 'Test 2': 'header label - visible with data', });
lyr_testshapes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});