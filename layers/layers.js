ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:21818").setExtent([388947.708529, 1033852.945199, 390000.848990, 1034371.325408]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Predio_1 = new ol.format.GeoJSON();
var features_Predio_1 = format_Predio_1.readFeatures(json_Predio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Predio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predio_1.addFeatures(features_Predio_1);
var lyr_Predio_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Predio_1, 
                style: style_Predio_1,
                popuplayertitle: 'Predio',
                interactive: false,
                title: '<img src="styles/legend/Predio_1.png" /> Predio'
            });
var format_Colindantes_2 = new ol.format.GeoJSON();
var features_Colindantes_2 = format_Colindantes_2.readFeatures(json_Colindantes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Colindantes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colindantes_2.addFeatures(features_Colindantes_2);
var lyr_Colindantes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colindantes_2, 
                style: style_Colindantes_2,
                popuplayertitle: 'Colindantes',
                interactive: false,
                title: '<img src="styles/legend/Colindantes_2.png" /> Colindantes'
            });
var format_Lotes_forme_cluster_3 = new ol.format.GeoJSON();
var features_Lotes_forme_cluster_3 = format_Lotes_forme_cluster_3.readFeatures(json_Lotes_forme_cluster_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21818'});
var jsonSource_Lotes_forme_cluster_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_forme_cluster_3.addFeatures(features_Lotes_forme_cluster_3);
var lyr_Lotes_forme_cluster_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lotes_forme_cluster_3, 
                style: style_Lotes_forme_cluster_3,
                popuplayertitle: 'Lotes_forme_cluster',
                interactive: true,
    title: 'Lotes_forme_cluster<br />\
    <img src="styles/legend/Lotes_forme_cluster_3_0.png" /> Arbolización Entrada<br />\
    <img src="styles/legend/Lotes_forme_cluster_3_1.png" /> I<br />\
    <img src="styles/legend/Lotes_forme_cluster_3_2.png" /> II<br />\
    <img src="styles/legend/Lotes_forme_cluster_3_3.png" /> III<br />\
    <img src="styles/legend/Lotes_forme_cluster_3_4.png" /> IV<br />\
    <img src="styles/legend/Lotes_forme_cluster_3_5.png" /> IX<br />\
    <img src="styles/legend/Lotes_forme_cluster_3_6.png" /> Parque Principal<br />\
    <img src="styles/legend/Lotes_forme_cluster_3_7.png" /> V<br />\
    <img src="styles/legend/Lotes_forme_cluster_3_8.png" /> VI<br />\
    <img src="styles/legend/Lotes_forme_cluster_3_9.png" /> VII<br />\
    <img src="styles/legend/Lotes_forme_cluster_3_10.png" /> VIII<br />\
    <img src="styles/legend/Lotes_forme_cluster_3_11.png" /> X<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Predio_1.setVisible(true);lyr_Colindantes_2.setVisible(true);lyr_Lotes_forme_cluster_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Predio_1,lyr_Colindantes_2,lyr_Lotes_forme_cluster_3];
lyr_Predio_1.set('fieldAliases', {'id': 'id', 'Área': 'Área', });
lyr_Colindantes_2.set('fieldAliases', {'id': 'id', });
lyr_Lotes_forme_cluster_3.set('fieldAliases', {'id': 'id', 'Área': 'Área', 'Bloque': 'Bloque', });
lyr_Predio_1.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', });
lyr_Colindantes_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Lotes_forme_cluster_3.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', 'Bloque': 'TextEdit', });
lyr_Predio_1.set('fieldLabels', {'id': 'hidden field', 'Área': 'inline label - always visible', });
lyr_Colindantes_2.set('fieldLabels', {'id': 'hidden field', });
lyr_Lotes_forme_cluster_3.set('fieldLabels', {'id': 'inline label - always visible', 'Área': 'header label - visible with data', 'Bloque': 'inline label - always visible', });
lyr_Lotes_forme_cluster_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});