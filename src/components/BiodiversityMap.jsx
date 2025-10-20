import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const BiodiversityMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (mapInstanceRef.current) return;

    // Inicializar el mapa
    const map = L.map(mapRef.current).setView([1.82, -76.05], 11);
    mapInstanceRef.current = map;

    // Capas base seleccionadas
    const baseLayers = {
      "🏔️ Topográfico": L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenTopoMap',
        maxZoom: 17
      }),
      "🛰️ Satélite ESRI": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri, Maxar, Earthstar Geographics',
        maxZoom: 18
      }),
      "🌳 OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19
      }),
      "🎨 CartoDB Voyager": L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CartoDB & OpenStreetMap',
        subdomains: 'abcd',
        maxZoom: 19
      })
    };

    baseLayers["🛰️ Satélite ESRI"].addTo(map);

    // Función para crear marcador personalizado con número
    function crearMarcadorConNumero(lat, lon, color, nombre, cluster, especies, grupo) {
      const numEspecies = especies.length;

      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div class="marker-pin marker-${color}">
            <div class="marker-circle">${numEspecies}</div>
            <div class="marker-pointer"></div>
          </div>
        `,
        iconSize: [40, 50],
        iconAnchor: [20, 50],
        popupAnchor: [0, -50]
      });

      const popupContent = `
        <div class="popup-card">
          <div class="popup-header ${color}">
            <h6>📍 ${nombre}</h6>
            <div class="cluster-name">${cluster}</div>
          </div>
          <div class="popup-body">
            <div class="species-count"> ${numEspecies} especies registradas</div>
            <ul>${especies.map(s => `<li>${s}</li>`).join('')}</ul>
          </div>
        </div>
      `;

      L.marker([lat, lon], { icon: customIcon })
        .bindPopup(popupContent, { maxWidth: 320, className: 'custom-popup' })
        .addTo(grupo);
    }

    // Datos de clusters
    const clusters = {
      
      "Cluster 1 Palmarito & Regueros": {
        color: 'blue',
        puntos: [
          {
            nombre: 'Palmarito',
            lat: 1.8, lon: -76.1,
            especies: [
              "Dasyprocta punctata", "Syntheosciurus granatensis", "Arremon brunneinucha", "Canis lupus", "Zentrygon linearis",
              "Rodentia", "Catharus ustulatus", "Dasypus novemcinctus", "Eira barbara", "Ortalis columbiana", "Cyanocorax yncas",
              "Henicorhina leucophrys", "Didelphis pernigra", "Cerdocyon thous", "Leopardus tigrinus", "Leptotila verreauxi",
              "Herpailurus yagouaroundi", "Chiroptera", "Megascops choliba", "Catharus aurantiirostris", "Chamaeza turdina",
              "Colinus cristatus", "Myioborus miniatus", "Neogale frenata", "Turdus fuscater"
            ]
          },
          {
            nombre: 'Regueros',
            lat: 1.83, lon: -76.12,
            especies: [
              "Dasyprocta punctata", "Syntheosciurus granatensis", "Arremon brunneinucha", "Canis lupus", "Zentrygon linearis",
              "Rodentia", "Catharus ustulatus", "Dasypus novemcinctus", "Eira barbara", "Ortalis columbiana", "Cyanocorax yncas",
              "Henicorhina leucophrys", "Didelphis pernigra", "Cerdocyon thous", "Leopardus tigrinus", "Leptotila verreauxi",
              "Herpailurus yagouaroundi", "Chiroptera", "Megascops choliba", "Catharus aurantiirostris", "Chamaeza turdina",
              "Colinus cristatus", "Myioborus miniatus", "Neogale frenata", "Turdus fuscater"
            ]
          }
        ]
      },

      "Cluster 2 Charguayaco": {
        color: 'green',
        puntos: [
          {
            nombre: 'Charguayaco',
            lat: 1.78, lon: -76.02,
            especies: [
              "Syntheosciurus granatensis", "Dasyprocta punctata", "Arremon brunneinucha", "Zentrygon linearis",
              "Pyriglena maura", "Marmosops sp", "Rodentia", "Didelphis marsupialis", "Henicorhina leucophrys",
              "Canis lupus", "Didelphis pernigra", "Catharus aurantiirostris", "Scytalopus atratus", "Aramides cajaneus",
              "Dasypus novemcinctus", "Leopardus tigrinus", "Neogale frenata", "Ortalis columbiana"
            ]
          }
        ]
      },

      "Cluster 3 Guacacallo": {
        color: 'orange',
        puntos: [
          {
            nombre: 'Guacacallo',
            lat: 1.82, lon: -76.08,
            especies: [
              "Arremon brunneinucha", "Syntheosciurus granatensis", "Dasyprocta punctata", "Rodentia", "Chamaeza turdina",
              "Didelphis pernigra", "Nasua nasua", "Leptosciurus pucheranii", "Potos flavus", "Catharus ustulatus",
              "Dasypus novemcinctus", "Grallaria ruficapilla", "Pyriglena maura", "Zentrygon frenata"
            ]
          }
        ]
      },

      "Cluster 4 Bruselas": {
        color: 'red',
        puntos: [
          {
            nombre: 'Bruselas',
            lat: 1.85, lon: -76.05,
            especies: [
              "Syntheosciurus granatensis", "Rodentia", "Canis lupus", "Arremon brunneinucha", "Grallaria ruficapilla",
              "Turdus fulviventris", "Dasyprocta punctata", "Cerdocyon thous", "Zentrygon frenata", "Tremarctos ornatus",
              "Herpailurus yagouaroundi", "Nothocercus bonapartei", "Eira barbara", "Leopardus tigrinus", "Nasua nasua",
              "Marmosops sp", "Leopardus pardalis", "Odontophorus hyperythrus", "Neogale frenata", "Chamaepetes goudotii",
              "Nothocercus julius", "Mazama rufina", "Turdus serranus", "Henicorhina leucophrys", "Dasypus novemcinctus",
              "Didelphis pernigra", "Chamaeza turdina", "Tapirus pinchaque", "Catharus ustulatus", "Myiothlypis coronata",
              "Cuniculus taczanowskii", "Grallaricula nana", "Momotus aequatorialis", "Myadestes ralloides", "Pyriglena maura",
              "Myiarchus cephalotes", "Puma concolor", "Grallaricula cucullata", "Myioborus miniatus", "Atlapes leucopis",
              "Ciccaba sp", "Cryptotis sp", "Leptotila conoveri", "Pipreola riefferii", "Pyrrhura melanura", "Sapajus apella",
              "Scytalopus spillmanni", "Speothos venaticus", "Synallaxis unirufa", "Cinnycerthia olivascens", "Cyanocorax yncas",
              "Ochthoeca diadema", "Aburria aburri", "Anisognathus somptuosus", "Campephilus pollens", "Coeligena coeligena",
              "Coeligena torquata", "Coragyps atratus", "Grallaria hypoleuca", "Panthera onca", "Pyriglena leuconota",
              "Tamandua tetradactyla", "Uropsalis sp", "Asio stygius", "Aulacorhynchus albivitta", "Campephilus melanooleucos",
              "Chamaeza mollissima", "Chlorornis riefferii", "Coendou rufescens", "Colaptes rivolii", "Dendrocolaptes picumnus",
              "Didelphis marsupialis", "Dryobates fumigatus", "Eriocnemis aline", "Heteromys anomalus", "Leptotila verreauxi",
              "Micrastus sp", "Myioborus ornatus", "Patagioenas sp", "Piaya cayana", "Rupicola peruvianus", "Scytalopus sp",
              "Silvicultrix diadema", "Thamnophilus unicolor", "Trogon personatus"
            ]
          }
        ]
      }
    };

    // Crear grupos y marcadores
    const overlays = {};
    Object.entries(clusters).forEach(([nombreCluster, data]) => {
      const grupo = L.layerGroup();
      data.puntos.forEach(p => crearMarcadorConNumero(p.lat, p.lon, data.color, p.nombre, nombreCluster, p.especies, grupo));
      overlays[nombreCluster] = grupo;
      grupo.addTo(map);
    });

    // Control de capas COLAPSADO por defecto
    L.control.layers(baseLayers, overlays, { collapsed: true }).addTo(map);

    // Leyenda mejorada
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'legend');
      div.innerHTML = '<h4>Clusters</h4>';

      Object.entries(clusters).forEach(([nombre, data]) => {
        const bgColor = data.color === 'red' ? '#e74c3c' : data.color === 'orange' ? '#f39c12' : data.color === 'green' ? '#27ae60' : '#3498db';
        div.innerHTML += `
          <div class="legend-item">
            <i style="background:${bgColor}"></i>
            <span class="legend-text">${nombre}</span>
          </div>
        `;
      });

      return div;
    };
    legend.addTo(map);

    // Añadir escala
    L.control.scale({ imperial: false, metric: true }).addTo(map);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="h-screen w-full relative flex items-start mt-8 justify-center p-8">
      <style>{`
        /* Marcadores personalizados con números */
        .custom-marker {
          background: transparent;
          border: none;
          width: 40px;
          height: 40px;
        }

        .marker-pin {
          position: relative;
          width: 40px;
          height: 40px;
        }

        .marker-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 13px;
          color: white;
          position: absolute;
          top: 0;
          left: 2px;
        }

        .marker-pointer {
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 12px solid white;
          position: absolute;
          bottom: -8px;
          left: 12px;
          filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
        }

        .marker-pointer::before {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 10px solid;
          top: -12px;
          left: -6px;
        }

        /* Colores para cada cluster */
        .marker-red .marker-circle {
          background: #e74c3c;
        }

        .marker-red .marker-pointer::before {
          border-top-color: #e74c3c;
        }

        .marker-orange .marker-circle {
          background: #f39c12;
        }

        .marker-orange .marker-pointer::before {
          border-top-color: #f39c12;
        }

        .marker-green .marker-circle {
          background: #27ae60;
        }

        .marker-green .marker-pointer::before {
          border-top-color: #27ae60;
        }

        .marker-blue .marker-circle {
          background: #3498db;
        }

        .marker-blue .marker-pointer::before {
          border-top-color: #3498db;
        }

        /* Popup mejorado */
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
          padding: 0;
        }

        .leaflet-popup-content {
          margin: 0;
          min-width: 300px;
        }

        .popup-card {
          padding: 0;
          border-radius: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .popup-header {
          background: rgba(255, 255, 255, 0.95);
          padding: 16px;
          border-radius: 12px 12px 0 0;
          border-bottom: 3px solid;
        }

        .popup-header.red {
          border-bottom-color: #e74c3c;
        }

        .popup-header.orange {
          border-bottom-color: #f39c12;
        }

        .popup-header.green {
          border-bottom-color: #27ae60;
        }

        .popup-header.blue {
          border-bottom-color: #3498db;
        }

        .popup-card h6 {
          margin: 0 0 8px 0;
          color: #2c3e50;
          font-size: 18px;
          font-weight: 600;
        }

        .popup-card .cluster-name {
          color: #7f8c8d;
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .popup-body {
          background: white;
          padding: 16px;
          border-radius: 0 0 12px 12px;
        }

        .species-count {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 12px;
        }

        .popup-card ul {
          margin: 0;
          padding: 0 0 0 20px;
          max-height: 200px;
          overflow-y: auto;
          list-style: none;
        }

        .popup-card ul li {
          padding: 6px 0;
          color: #34495e;
          font-size: 13px;
          border-bottom: 1px solid #ecf0f1;
          position: relative;
        }

        .popup-card ul li:last-child {
          border-bottom: none;
        }

        .popup-card ul li::before {
          content: '•';
          position: absolute;
          left: -20px;
        }

        /* Scrollbar personalizado */
        .popup-card ul::-webkit-scrollbar {
          width: 6px;
        }

        .popup-card ul::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .popup-card ul::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
        }

        /* Leyenda mejorada */
        .legend {
          background: rgba(255, 255, 255, 0.95);
          padding: 10px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          font-size: 10px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .legend h4 {
          margin: 0 0 12px 0;
          color: #2c3e50;
          font-size: 15px;
          font-weight: 600;
          border-bottom: 2px solid #4da428;
          padding-bottom: 6px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          margin: 5px 0;
          padding: 2px;
          border-radius: 6px;
          transition: background 0.2s;
        }

        .legend-item:hover {
          background: rgba(77, 164, 40, 0.1);
        }

        .legend i {
          width: 20px;
          height: 20px;
          display: inline-block;
          margin-right: 10px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .legend-text {
          color: #34495e;
          font-size: 12px;
          font-weight: 500;
        }

        /* Control de capas mejorado y COLAPSADO */
        .leaflet-control-layers {
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
        }

        .leaflet-control-layers-toggle {
          background-size: 20px 20px;
          width: 40px;
          height: 40px;
          background-color: white;
          border-radius: 8px;
        }

        .leaflet-control-layers-expanded {
          padding: 12px;
          border-radius: 12px;
        }

        .leaflet-control-layers-base,
        .leaflet-control-layers-overlays {
          margin-top: 8px;
        }

        .leaflet-control-layers-base label,
        .leaflet-control-layers-overlays label {
          display: flex;
          align-items: center;
          padding: 8px 4px;
          border-radius: 6px;
          transition: background 0.2s;
          cursor: pointer;
          font-size: 13px;
        }

        .leaflet-control-layers-base label:hover,
        .leaflet-control-layers-overlays label:hover {
          background: rgba(77, 164, 40, 0.1);
        }

        .leaflet-control-layers-separator {
          border-top: 1px solid #ddd;
          margin: 8px 0;
        }
        
        /* Mapa con esquinas redondeadas */
        .map-container {
          width: 70%;
          height: 70vh;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <div className="map-container">
        <div ref={mapRef} className="w-full h-full" />
      </div>
    </div>
  );
};

export default BiodiversityMap;