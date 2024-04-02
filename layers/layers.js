var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Communes_1 = new ol.format.GeoJSON();
var features_Communes_1 = format_Communes_1.readFeatures(json_Communes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_1.addFeatures(features_Communes_1);
var lyr_Communes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_1,
maxResolution:28004.466152261964,
 
                style: style_Communes_1,
                popuplayertitle: "Communes",
                interactive: true,
                title: '<img src="styles/legend/Communes_1.png" /> Communes'
            });
var format_EPCI_2 = new ol.format.GeoJSON();
var features_EPCI_2 = format_EPCI_2.readFeatures(json_EPCI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCI_2.addFeatures(features_EPCI_2);
var lyr_EPCI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EPCI_2,
maxResolution:28004.466152261964,
 
                style: style_EPCI_2,
                popuplayertitle: "EPCI",
                interactive: true,
                title: '<img src="styles/legend/EPCI_2.png" /> EPCI'
            });
var format_GrandsItinraires_3 = new ol.format.GeoJSON();
var features_GrandsItinraires_3 = format_GrandsItinraires_3.readFeatures(json_GrandsItinraires_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrandsItinraires_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrandsItinraires_3.addFeatures(features_GrandsItinraires_3);
var lyr_GrandsItinraires_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrandsItinraires_3,
maxResolution:28004.466152261964,
 
                style: style_GrandsItinraires_3,
                popuplayertitle: "Grands Itinéraires",
                interactive: true,
                title: '<img src="styles/legend/GrandsItinraires_3.png" /> Grands Itinéraires'
            });
var format_PR_4 = new ol.format.GeoJSON();
var features_PR_4 = format_PR_4.readFeatures(json_PR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PR_4.addFeatures(features_PR_4);
var lyr_PR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PR_4,
maxResolution:28004.466152261964,
 
                style: style_PR_4,
                popuplayertitle: "PR",
                interactive: true,
                title: '<img src="styles/legend/PR_4.png" /> PR'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Communes_1.setVisible(true);lyr_EPCI_2.setVisible(true);lyr_GrandsItinraires_3.setVisible(true);lyr_PR_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Communes_1,lyr_EPCI_2,lyr_GrandsItinraires_3,lyr_PR_4];
lyr_Communes_1.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'ID_CH_LIEU': 'ID_CH_LIEU', 'CODE_SIREN': 'CODE_SIREN', });
lyr_EPCI_2.set('fieldAliases', {'ID_EPCI': 'ID_EPCI', 'SIREN_EPCI': 'SIREN_EPCI', 'NOM_EPCI': 'NOM_EPCI', 'NAT_EPCI': 'NAT_EPCI', 'FISC_EPCI': 'FISC_EPCI', 'NB_COM': 'NB_COM', 'PTOT_EPCI': 'PTOT_EPCI', 'PMUN_EPCI': 'PMUN_EPCI', 'MAJ': 'MAJ', });
lyr_GrandsItinraires_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'CODE_ITI': 'CODE_ITI', 'TYPE_ITI': 'TYPE_ITI', 'M_OUVRAGE': 'M_OUVRAGE', 'NOM_ITINER': 'NOM_ITINER', 'LONGUEUR': 'LONGUEUR', 'PRATIQUE_1': 'PRATIQUE_1', 'PRATIQUE_2': 'PRATIQUE_2', 'PRATIQUE_3': 'PRATIQUE_3', 'ACCES_HAND': 'ACCES_HAND', 'AGREE_TH': 'AGREE_TH', 'BALISAGE_1': 'BALISAGE_1', 'BALISAGE_2': 'BALISAGE_2', 'TRAME_DEPA': 'TRAME_DEPA', 'CDT_CRT': 'CDT_CRT', 'GUIDE_1': 'GUIDE_1', 'GUIDE_2': 'GUIDE_2', 'GUIDE_3': 'GUIDE_3', 'PC_ROUTE': 'PC_ROUTE', 'PC_BITUME': 'PC_BITUME', 'PC_CC': 'PC_CC', 'PC_CNC': 'PC_CNC', 'PC_COTIER': 'PC_COTIER', 'DELIB_CHEM': 'DELIB_CHEM', 'NOTE_TECHN': 'NOTE_TECHN', 'NOTE_ENVIR': 'NOTE_ENVIR', 'PDIPR': 'PDIPR', 'STATUT_PDI': 'STATUT_PDI', 'CATEGORIE': 'CATEGORIE', 'DATE_INSCR': 'DATE_INSCR', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_PR_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'CODE_ITI': 'CODE_ITI', 'STRUC_TOUR': 'STRUC_TOUR', 'M_OUVRAGE': 'M_OUVRAGE', 'NOM_ITINER': 'NOM_ITINER', 'LONGUEUR': 'LONGUEUR', 'DUREE': 'DUREE', 'PRATIQUE_1': 'PRATIQUE_1', 'PRATIQUE_2': 'PRATIQUE_2', 'PRATIQUE_3': 'PRATIQUE_3', 'ACCES_HAND': 'ACCES_HAND', 'AGREE_TH': 'AGREE_TH', 'BALISAGE_1': 'BALISAGE_1', 'BALISAGE_2': 'BALISAGE_2', 'DIFFICULTE': 'DIFFICULTE', 'TRAME_DEPA': 'TRAME_DEPA', 'CDT_CRT': 'CDT_CRT', 'TOPO_1': 'TOPO_1', 'GUIDE_2': 'GUIDE_2', 'GUIDE_3': 'GUIDE_3', 'TOPO_29': 'TOPO_29', 'PC_ROUTE': 'PC_ROUTE', 'URBAIN': 'URBAIN', 'INTERPRETA': 'INTERPRETA', 'LONG_ROUTE': 'LONG_ROUTE', 'PC_BITUME': 'PC_BITUME', 'PC_CC': 'PC_CC', 'PC_CNC': 'PC_CNC', 'PC_COTIER': 'PC_COTIER', 'SPPL': 'SPPL', 'CONV_PASSA': 'CONV_PASSA', 'DELIB_CHEM': 'DELIB_CHEM', 'NOTE_TECHN': 'NOTE_TECHN', 'NOTE_ENVIR': 'NOTE_ENVIR', 'EI_NATURA_': 'EI_NATURA_', 'CATEGORIE': 'CATEGORIE', 'PDIPR': 'PDIPR', 'STATUT_PDI': 'STATUT_PDI', 'DATE_INSCR': 'DATE_INSCR', 'SIGNAT_1': 'SIGNAT_1', 'SIGNAT_2': 'SIGNAT_2', 'SIGNAT_3': 'SIGNAT_3', 'SIGNAT_4': 'SIGNAT_4', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Communes_1.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'CODE_SIREN': 'TextEdit', });
lyr_EPCI_2.set('fieldImages', {'ID_EPCI': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'NOM_EPCI': 'TextEdit', 'NAT_EPCI': 'TextEdit', 'FISC_EPCI': 'TextEdit', 'NB_COM': 'TextEdit', 'PTOT_EPCI': 'TextEdit', 'PMUN_EPCI': 'TextEdit', 'MAJ': 'TextEdit', });
lyr_GrandsItinraires_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'CODE_ITI': 'TextEdit', 'TYPE_ITI': 'TextEdit', 'M_OUVRAGE': 'TextEdit', 'NOM_ITINER': 'TextEdit', 'LONGUEUR': 'TextEdit', 'PRATIQUE_1': 'TextEdit', 'PRATIQUE_2': 'TextEdit', 'PRATIQUE_3': 'TextEdit', 'ACCES_HAND': 'TextEdit', 'AGREE_TH': 'Range', 'BALISAGE_1': 'TextEdit', 'BALISAGE_2': 'TextEdit', 'TRAME_DEPA': 'TextEdit', 'CDT_CRT': 'TextEdit', 'GUIDE_1': 'TextEdit', 'GUIDE_2': 'TextEdit', 'GUIDE_3': 'TextEdit', 'PC_ROUTE': 'TextEdit', 'PC_BITUME': 'TextEdit', 'PC_CC': 'TextEdit', 'PC_CNC': 'TextEdit', 'PC_COTIER': 'TextEdit', 'DELIB_CHEM': 'TextEdit', 'NOTE_TECHN': 'TextEdit', 'NOTE_ENVIR': 'TextEdit', 'PDIPR': 'TextEdit', 'STATUT_PDI': 'TextEdit', 'CATEGORIE': 'TextEdit', 'DATE_INSCR': 'DateTime', 'SHAPE_LEN': 'TextEdit', });
lyr_PR_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'CODE_ITI': 'TextEdit', 'STRUC_TOUR': 'TextEdit', 'M_OUVRAGE': 'TextEdit', 'NOM_ITINER': 'TextEdit', 'LONGUEUR': 'TextEdit', 'DUREE': 'TextEdit', 'PRATIQUE_1': 'TextEdit', 'PRATIQUE_2': 'TextEdit', 'PRATIQUE_3': 'TextEdit', 'ACCES_HAND': 'TextEdit', 'AGREE_TH': 'Range', 'BALISAGE_1': 'TextEdit', 'BALISAGE_2': 'TextEdit', 'DIFFICULTE': 'TextEdit', 'TRAME_DEPA': 'TextEdit', 'CDT_CRT': 'TextEdit', 'TOPO_1': 'TextEdit', 'GUIDE_2': 'TextEdit', 'GUIDE_3': 'TextEdit', 'TOPO_29': 'Range', 'PC_ROUTE': 'TextEdit', 'URBAIN': 'TextEdit', 'INTERPRETA': 'TextEdit', 'LONG_ROUTE': 'TextEdit', 'PC_BITUME': 'TextEdit', 'PC_CC': 'TextEdit', 'PC_CNC': 'TextEdit', 'PC_COTIER': 'TextEdit', 'SPPL': 'Range', 'CONV_PASSA': 'TextEdit', 'DELIB_CHEM': 'TextEdit', 'NOTE_TECHN': 'TextEdit', 'NOTE_ENVIR': 'TextEdit', 'EI_NATURA_': 'TextEdit', 'CATEGORIE': 'TextEdit', 'PDIPR': 'TextEdit', 'STATUT_PDI': 'TextEdit', 'DATE_INSCR': 'DateTime', 'SIGNAT_1': 'TextEdit', 'SIGNAT_2': 'TextEdit', 'SIGNAT_3': 'TextEdit', 'SIGNAT_4': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Communes_1.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'CODE_POST': 'inline label - visible with data', 'NOM': 'inline label - visible with data', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'CODE_SIREN': 'hidden field', });
lyr_EPCI_2.set('fieldLabels', {'ID_EPCI': 'hidden field', 'SIREN_EPCI': 'hidden field', 'NOM_EPCI': 'inline label - visible with data', 'NAT_EPCI': 'hidden field', 'FISC_EPCI': 'hidden field', 'NB_COM': 'hidden field', 'PTOT_EPCI': 'hidden field', 'PMUN_EPCI': 'hidden field', 'MAJ': 'hidden field', });
lyr_GrandsItinraires_3.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'CODE_ITI': 'inline label - visible with data', 'TYPE_ITI': 'hidden field', 'M_OUVRAGE': 'hidden field', 'NOM_ITINER': 'inline label - visible with data', 'LONGUEUR': 'hidden field', 'PRATIQUE_1': 'hidden field', 'PRATIQUE_2': 'hidden field', 'PRATIQUE_3': 'hidden field', 'ACCES_HAND': 'hidden field', 'AGREE_TH': 'hidden field', 'BALISAGE_1': 'hidden field', 'BALISAGE_2': 'hidden field', 'TRAME_DEPA': 'hidden field', 'CDT_CRT': 'hidden field', 'GUIDE_1': 'hidden field', 'GUIDE_2': 'hidden field', 'GUIDE_3': 'hidden field', 'PC_ROUTE': 'hidden field', 'PC_BITUME': 'hidden field', 'PC_CC': 'hidden field', 'PC_CNC': 'hidden field', 'PC_COTIER': 'hidden field', 'DELIB_CHEM': 'hidden field', 'NOTE_TECHN': 'hidden field', 'NOTE_ENVIR': 'hidden field', 'PDIPR': 'hidden field', 'STATUT_PDI': 'hidden field', 'CATEGORIE': 'hidden field', 'DATE_INSCR': 'hidden field', 'SHAPE_LEN': 'hidden field', });
lyr_PR_4.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'CODE_ITI': 'inline label - visible with data', 'STRUC_TOUR': 'hidden field', 'M_OUVRAGE': 'hidden field', 'NOM_ITINER': 'inline label - visible with data', 'LONGUEUR': 'hidden field', 'DUREE': 'hidden field', 'PRATIQUE_1': 'hidden field', 'PRATIQUE_2': 'hidden field', 'PRATIQUE_3': 'hidden field', 'ACCES_HAND': 'hidden field', 'AGREE_TH': 'hidden field', 'BALISAGE_1': 'hidden field', 'BALISAGE_2': 'hidden field', 'DIFFICULTE': 'hidden field', 'TRAME_DEPA': 'hidden field', 'CDT_CRT': 'hidden field', 'TOPO_1': 'hidden field', 'GUIDE_2': 'hidden field', 'GUIDE_3': 'hidden field', 'TOPO_29': 'hidden field', 'PC_ROUTE': 'hidden field', 'URBAIN': 'hidden field', 'INTERPRETA': 'hidden field', 'LONG_ROUTE': 'hidden field', 'PC_BITUME': 'hidden field', 'PC_CC': 'hidden field', 'PC_CNC': 'hidden field', 'PC_COTIER': 'hidden field', 'SPPL': 'hidden field', 'CONV_PASSA': 'hidden field', 'DELIB_CHEM': 'hidden field', 'NOTE_TECHN': 'hidden field', 'NOTE_ENVIR': 'hidden field', 'EI_NATURA_': 'hidden field', 'CATEGORIE': 'hidden field', 'PDIPR': 'hidden field', 'STATUT_PDI': 'hidden field', 'DATE_INSCR': 'hidden field', 'SIGNAT_1': 'hidden field', 'SIGNAT_2': 'hidden field', 'SIGNAT_3': 'hidden field', 'SIGNAT_4': 'hidden field', 'SHAPE_LEN': 'hidden field', });
lyr_PR_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});