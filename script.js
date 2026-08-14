const CONFIG = {
    'car': {
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSosfBP3StMyRUzwI0tUZPsLjPVH1zePCz8gZbTMOzjOvnonbmNCoy5VT46UxO0qdqb-Wm9EqTpXp8y/pub?gid=989357250&single=true&output=csv',
        title: '<span class="brand-inline">LIGTAS-AGAD</span> CAR <span class="highlight">Landslide Warning Advisory</span>',
        regionName: 'CORDILLERA ADMINISTRATIVE REGION (CAR)',
        provinceName: 'PROBINSYA NG BENGUET AT CORDILLERA',
        threshold: '64 mm',
        footer: 'Computed threshold in Cordillera Administrative Region (CAR)'
    },
    'calabarzon': {
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSosfBP3StMyRUzwI0tUZPsLjPVH1zePCz8gZbTMOzjOvnonbmNCoy5VT46UxO0qdqb-Wm9EqTpXp8y/pub?gid=1182911633&single=true&output=csv',
        title: '<span class="brand-inline">LIGTAS-AGAD</span> CALABARZON <span class="highlight">Landslide Warning Advisory</span>',
        regionName: 'CALABARZON (REGION IV-A)',
        provinceName: 'PROBINSYA NG LAGUNA AT QUEZON',
        threshold: '92 mm*',
        footer: '*Rainfall-Landslide Threshold for CALABARZON applied in Laguna'
    },
    'bicol-region': {
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSosfBP3StMyRUzwI0tUZPsLjPVH1zePCz8gZbTMOzjOvnonbmNCoy5VT46UxO0qdqb-Wm9EqTpXp8y/pub?gid=2049973263&single=true&output=csv',
        title: '<span class="brand-inline">LIGTAS-AGAD</span> Bicol Region <span class="highlight">Landslide Warning Advisory</span>',
        regionName: 'BICOL REGION (REGION V)',
        provinceName: 'MGA PROBINSYA NG BICOL REGION',
        threshold: '27 mm**',
        footer: '**Rainfall Landslide Threshold for Bicol Region applied in Bicol Region'
    },
    'northern-samar': {
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSosfBP3StMyRUzwI0tUZPsLjPVH1zePCz8gZbTMOzjOvnonbmNCoy5VT46UxO0qdqb-Wm9EqTpXp8y/pub?gid=2049973263&single=true&output=csv',
        title: '<span class="brand-inline">LIGTAS-AGAD</span> Northern Samar <span class="highlight">Landslide Warning Advisory</span>',
        regionName: 'NORTHERN SAMAR (REGION VIII)',
        provinceName: 'PROBINSYA NG NORTHERN SAMAR',
        threshold: '27 mm**',
        footer: '**Rainfall Landslide Threshold applied in Northern Samar'
    }
};

const AWS_CONFIG_LIST = [
    { key: 'LANDGRANT', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_Landgrant%20AWS_RIL_HL.geojson', name: 'LIGTAS LANDGRANT AWS', defaultEnabled: true, regions: ['calabarzon'] },
    { key: 'NAC', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_NAC%20AWS_RIL_HL.geojson', name: 'LIGTAS NAC 2026', defaultEnabled: true, regions: ['calabarzon'] },
    { key: 'PGPC', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_PGPC%20AWS_RIL_HL.geojson', name: 'VOTE PGPC AWS', defaultEnabled: true, regions: ['calabarzon'] },
    { key: 'MANKAYAN', url: 'https://api.maptiler.com/data/019f44a0-c1f3-7d6c-a4cd-bf01ec8769e3/features.json?key=HnKlTumvQGjlZFqKA35V', name: 'LIGTAS MANKAYAN AWS', defaultEnabled: true, regions: ['car'] },
    { key: 'BUGUIAS', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_Buguias%20AWS_RIL_HL.geojson', name: 'LIGTAS BUGUIAS AWS', defaultEnabled: true, regions: ['car'] },
    { key: 'BOKOD', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_Bokod%20AWS_RIL_HL.geojson', name: 'LIGTAS BOKOD AWS', defaultEnabled: true, regions: ['car'] },
    { key: 'COROZ', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_Coroz%20AWS_RIL_HL.geojson', name: 'LIGTAS COROZ AWS', defaultEnabled: true, regions: ['car'] },
    { key: 'ITOGON', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_Itogon%20AWS_RIL_HL.geojson', name: 'LIGTAS ITOGON AWS', defaultEnabled: true, regions: ['car'] },
    { key: 'CATANAUAN', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_Catanauan%20AWS_RIL_HL.geojson', name: 'LIGTAS CATANAUAN AWS', defaultEnabled: true, regions: ['calabarzon'] },
    { key: 'CATARMAN', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_Catarman%20AWS_RIL_HL.geojson', name: 'LIGTAS UEP-CATARMAN AWS', defaultEnabled: true, regions: ['northern-samar'] },
    { key: 'Los Banos, Laguna AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/UPLB%20Laguna%20AWS_RIL_HL.geojson', name: 'PAGASA-UP Los Banos, Laguna AWS', defaultEnabled: true, regions: ['calabarzon'] },
    { key: 'Polillio-Quezon AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Polilo%20Quezon%20AWS_RIL_HL.geojson', name: 'PAGASA-Polillio-Quezon AWS', defaultEnabled: true, regions: ['calabarzon'] },
    { key: 'Mulanay, Quezon AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Mulanay%20Quezon%20AWS_RIL_HL.geojson', name: 'PAGASA-Mulanay, Quezon AWS', defaultEnabled: true, regions: ['calabarzon'] },
    { key: 'Pili Camarines Sur AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Pili%20Camarines%20Sur%20AWS_RIL_HL.geojson', name: 'PAGASA-Pili Camarines Sur AWS', defaultEnabled: true, regions: ['bicol-region'] },
    { key: 'Legazpi AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Legazpi%20Albay%20AWS_RIL_HL.geojson', name: 'PAGASA-Legazpi AWS', defaultEnabled: true, regions: ['bicol-region'] },
    { key: 'Northern-Samar AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Catarman%20Northern%20Samar%20AWS_RIL_HL.geojson', name: 'PAGASA-Northern-Samar AWS', defaultEnabled: true, regions: ['northern-samar'] },
    { key: 'Ambulong Tanauan Batangas AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Ambulong%20Tanauan%20Batangas%20AWS_RIL_HL.geojson', name: 'PAGASA-Ambulong Tanauan Batangas AWS', defaultEnabled: true, regions: ['calabarzon'] },
    { key: 'Lipa, Batangas AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Lipa%20Batangas%20AWS_RIL_HL.geojson', name: 'PAGASA-Lipa, Batangas AWS', defaultEnabled: true, regions: ['calabarzon'] },
    { key: 'Tayabas-Quezon AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Tayabas%20Quezon%20AWS_RIL_HL.geojson', name: 'PAGASA-Tayabas-Quezon AWS', defaultEnabled: true, regions: ['calabarzon'] },
    { key: 'Tanay, Rizal AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Tanay%20Rizal%20AWS_RIL_HL.geojson', name: 'PAGASA-Tanay, Rizal AWS', defaultEnabled: true, regions: ['calabarzon'] },
    { key: 'Sorsogon, Sorsogon AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Sorsogon%20Sorsogon%20AWS_RIL_HL.geojson', name: 'PAGASA-Sorsogon, Sorsogon AWS', defaultEnabled: true, regions: ['bicol-region'] },
    { key: 'Virac, Catanduanes AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Virac%20Catanduanes%20AWS_RIL_HL.geojson', name: 'PAGASA-Virac, Catanduanes AWS', defaultEnabled: true, regions: ['bicol-region'] },
    { key: 'LIGTAS-AGAD PASIL AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/LIGTAS_Pasil%20AWS_RIL_HL.geojson', name: 'LIGTAS-AGAD PASIL AWS', defaultEnabled: true, regions: ['car'] },
    { key: 'LIGTAS-AGAD Licuan-Baay AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/LIGTAS_Licuan%20Baay%20AWS_RIL_HL.geojson', name: 'LIGTAS-AGAD Licuan-Baay AWS', defaultEnabled: true, regions: ['car'] },
    { key: 'LIGTAS-AGAD Calanasan AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/LIGTAS_Calanasan%20AWS_RIL_HL.geojson', name: 'LIGTAS-AGAD Calanasan AWS', defaultEnabled: true, regions: ['car'] },
    { key: 'LIGTAS-AGAD Barlig AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/LIGTAS_Barlig%20AWS_RIL_HL.geojson', name: 'LIGTAS-AGAD Barlig AWS', defaultEnabled: true, regions: ['car'] }
];

const TAGALOG_MONTHS = [
    'Enero', 'Pebreso', 'Marso', 'Abril', 'Mayo', 'Hunyo',
    'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre'
];

const geoJsonCache = new Map();

let map;
let leafletLayerControl = null;
let mapLegendControl = null; 
let currentCsvData = [];
let currentRegionId = 'car';
let stationMarkersRegistry = []; 
let awsLayersRegistry = {}; 
let awsLayerState = {};    
let geojsonLayer = null;
let lsdbLayer = null;
let currentCustomGeoJsonData = null;
let highlightedLayer = null;
let currentCustomIconUrl = null;

/* ========================================================= */
/* AWS Hierarchy Algorithm & Overlap Offset Logic             */
/* ========================================================= */

/**
 * Priority score based on warning level (Higher = Higher Priority)
 */
function getWarningLevelPriority(val) {
    const level = String(val).trim();
    switch (level) {
        case '3': return 4000;
        case '2': return 3000;
        case '1': return 2000;
        case '0': return 1000;
        default:  return 0; // N/A or default
    }
}

/**
 * Sorts data array according to warning level severity (Level 3 > Level 2 > Level 1 > Level 0 > N/A)
 */
function sortDataByWarningHierarchy(data) {
    if (!Array.isArray(data)) return [];
    return [...data].sort((a, b) => {
        const prioA = getWarningLevelPriority(a.Warning);
        const prioB = getWarningLevelPriority(b.Warning);
        if (prioB !== prioA) {
            return prioB - prioA;
        }
        // Secondary sort: Cumulative rainfall value descending
        const cumA = parseFloat(a.Cumulative) || 0;
        const cumB = parseFloat(b.Cumulative) || 0;
        return cumB - cumA;
    });
}

/**
 * Anti-overlap jittering algorithm.
 * Identifies markers sharing spatial coordinates and applies micro-offsets so lower warning level
 * markers do not obscure highest priority stations. High warning stations stay centered.
 */
function applyOverlapOffset(data) {
    const coordGroup = new Map();

    data.forEach(item => {
        if (item.Lat && item.Lng) {
            // Group coordinates rounded to 4 decimal places (~10m precision threshold)
            const key = `${parseFloat(item.Lat).toFixed(4)},${parseFloat(item.Lng).toFixed(4)}`;
            if (!coordGroup.has(key)) {
                coordGroup.set(key, []);
            }
            coordGroup.get(key).push(item);
        }
    });

    coordGroup.forEach(group => {
        if (group.length > 1) {
            // Sort ascending by warning priority inside the cluster group so higher warning stays centered & rendered on top
            group.sort((a, b) => getWarningLevelPriority(a.Warning) - getWarningLevelPriority(b.Warning));

            const total = group.length;
            group.forEach((item, index) => {
                if (index < total - 1) {
                    // Apply spiral offset for overlapping lower-priority markers
                    const angle = (index * 2 * Math.PI) / (total - 1);
                    const radius = 0.00025; // ~25 meters spatial offset
                    item._renderLat = parseFloat(item.Lat) + Math.sin(angle) * radius;
                    item._renderLng = parseFloat(item.Lng) + Math.cos(angle) * radius;
                } else {
                    // Keep top-priority warning station at exact geographic coordinate center
                    item._renderLat = parseFloat(item.Lat);
                    item._renderLng = parseFloat(item.Lng);
                }
            });
        } else if (group.length === 1) {
            group[0]._renderLat = parseFloat(group[0].Lat);
            group[0]._renderLng = parseFloat(group[0].Lng);
        }
    });

    return data;
}

function filterAwsLayersByRegion(data = []) {
    const activeKeysInCsv = new Set(
        data.map(row => row._awsKey).filter(Boolean)
    );

    AWS_CONFIG_LIST.forEach(cfg => {
        const isRegionMatch = Array.isArray(cfg.regions) && cfg.regions.includes(currentRegionId);
        const isCsvMatch = activeKeysInCsv.has(cfg.key);

        awsLayerState[cfg.key] = isRegionMatch || isCsvMatch;
    });

    if (awsLayerState['LIGTAS-LSDB'] === undefined) {
        awsLayerState['LIGTAS-LSDB'] = true;
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-toggle-icon');
    if (!icon) return;
    icon.className = theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

function formatTagalogDateTime() {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Manila',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };

    const formatter = new Intl.DateTimeFormat('en-PH', options);
    const parts = formatter.formatToParts(now);

    let day = '', monthIdx = 0, year = '', hour = '', minute = '', dayPeriod = '';

    parts.forEach(part => {
        if (part.type === 'day') day = part.value;
        if (part.type === 'month') monthIdx = parseInt(part.value, 10) - 1;
        if (part.type === 'year') year = part.value;
        if (part.type === 'hour') hour = part.value;
        if (part.type === 'minute') minute = part.value;
        if (part.type === 'dayPeriod') dayPeriod = part.value.toUpperCase();
    });

    const monthName = TAGALOG_MONTHS[monthIdx] || TAGALOG_MONTHS[now.getMonth()];
    return `${day} ${monthName} ${year} | ${hour}:${minute} ${dayPeriod}`;
}

function syncCurrentTime() {
    const formattedDate = formatTagalogDateTime();
    const rainfallDateEl = document.getElementById('rainfall-date');
    const bulletinDateEl = document.getElementById('bulletin-datetime');

    if (rainfallDateEl) rainfallDateEl.innerText = formattedDate;
    if (bulletinDateEl) bulletinDateEl.innerText = formattedDate;
}

setInterval(syncCurrentTime, 30000);

function renderFooterCredits() {
    const footerContainer = document.getElementById('ligtas-footer');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
        <div class="footer-inner">
            <div style="display:flex; align-items:center; gap:8px;">
                <strong style="color:var(--brand-color); font-size:0.85rem; letter-spacing:0.5px;">LIGTAS-AGAD</strong>
                <span>|</span>
                <span>Landslide Warning & Early Advisory Portal</span>
            </div>
            <div>
                <strong>Data Credits:</strong> DOST-PAGASA, DENR-MGB, DOST-Project LIGTAS-AGAD, DOST-Project SARAI
            </div>
            <div style="font-style:italic; opacity:0.8;">
                &copy; DOST LIGTAS-AGAD program. All rights reserved.
            </div>
        </div>
    `;
}

async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 6000 } = options;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(resource, { ...options, signal: controller.signal });
        clearTimeout(timer);
        return response;
    } catch (err) {
        clearTimeout(timer);
        throw err;
    }
}

function matchAwsKey(awsName) {
    if (!awsName) return null;
    const normName = awsName.toUpperCase().replace(/[^A-Z0-9]/g, '');
    for (const cfg of AWS_CONFIG_LIST) {
        const normKey = cfg.key.toUpperCase().replace(/[^A-Z0-9]/g, '');
        const normCfgName = cfg.name.toUpperCase().replace(/[^A-Z0-9]/g, '');
        if (normName.includes(normKey) || normKey.includes(normName) || 
            normName.includes(normCfgName) || normCfgName.includes(normName)) {
            return cfg.key;
        }
    }
    return null;
}

function getWarningColor(val) {
    const level = String(val).trim();
    switch (level) {
        case '3': return '#dc2626';
        case '2': return '#fd7e14';
        case '1': return '#facc15';
        case '0': return '#4ade80';
        case 'N/A':
        default:  return '#9ca3af';
    }
}

function findWarningLevel(awsKey, warningMap) {
    const normKey = awsKey.toUpperCase().replace(/[^A-Z0-9]/g, '');
    for (const [csvName, warningVal] of Object.entries(warningMap)) {
        const normCsv = csvName.toUpperCase().replace(/[^A-Z0-9]/g, '');
        if (normCsv.includes(normKey) || normKey.includes(normCsv)) {
            return warningVal;
        }
    }
    return 'N/A';
}

function buildAttributeTableHTML(properties) {
    if (!properties || Object.keys(properties).length === 0) {
        return '<p style="margin:4px 0; font-size:0.75rem; color:#64748b; font-style:italic;">No attributes available.</p>';
    }

    let rows = '';
    for (const [key, val] of Object.entries(properties)) {
        rows += `
            <tr>
                <td style="font-weight: bold; padding: 3px 6px 3px 0; border-bottom: 1px solid #e2e8f0; color: #334155;">${key}</td>
                <td style="padding: 3px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${val !== null && val !== undefined ? val : 'N/A'}</td>
            </tr>
        `;
    }

    return `
        <div style="max-height: 180px; overflow-y: auto; margin-top: 6px; border-top: 1px solid #cbd5e1; padding-top: 6px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.75rem;">
                ${rows}
            </table>
        </div>
    `;
}

async function createGeoJSONLayer(key, name, url, styleOptions = {}, onEachFeatureCustom = null) {
    try {
        let geoData;
        if (geoJsonCache.has(url)) {
            geoData = geoJsonCache.get(url);
        } else {
            const response = await fetchWithTimeout(url, { timeout: 8000 });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            geoData = await response.json();
            geoJsonCache.set(url, geoData);
        }

        const layer = L.geoJSON(geoData, {
            pane: styleOptions.pane || 'overlayPane',
            style: styleOptions,
            pointToLayer: (feature, latlng) => {
                return L.circleMarker(latlng, styleOptions);
            },
            onEachFeature: onEachFeatureCustom || ((feature, l) => {
                const attrHtml = buildAttributeTableHTML(feature.properties);
                l.bindPopup(`
                    <div style="color:#000; font-family:sans-serif; max-width:280px;">
                        <h4 style="margin:0 0 4px 0; color:#0284c7; font-size:0.85rem;">${name}</h4>
                        ${attrHtml}
                    </div>
                `);
            })
        });

        if (map) {
            layer.addTo(map);
            if (leafletLayerControl) {
                leafletLayerControl.addOverlay(layer, name);
            }
        }

        return layer;
    } catch (err) {
        console.warn(`Failed to create GeoJSON layer [${name}]:`, err.message);
        return null;
    }
}

async function initSynchronizedAWSLayer(awsKey, geoJsonUrl, displayName, warningMap) {
    const warningLevel = findWarningLevel(awsKey, warningMap);
    const color = getWarningColor(warningLevel);
    const zIndex = getWarningLevelPriority(warningLevel);

    try {
        let geoData;
        if (geoJsonCache.has(geoJsonUrl)) {
            geoData = geoJsonCache.get(geoJsonUrl);
        } else {
            const response = await fetchWithTimeout(geoJsonUrl, { timeout: 5000 });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            geoData = await response.json();
            geoJsonCache.set(geoJsonUrl, geoData);
        }

        let currentLayerGroup = null;

        currentLayerGroup = L.geoJSON(geoData, {
            style: {
                color: color,
                fillColor: color,
                fillOpacity: 0.45,
                weight: 2
            },
            pointToLayer: (feature, latlng) => {
                if (currentCustomIconUrl) {
                    const icon = L.icon({
                        iconUrl: currentCustomIconUrl,
                        iconSize: [32, 32],
                        iconAnchor: [16, 32],
                        popupAnchor: [0, -32]
                    });
                    return L.marker(latlng, { icon: icon, zIndexOffset: zIndex });
                }
                return L.circleMarker(latlng, {
                    radius: 7,
                    fillColor: color,
                    color: '#ffffff',
                    weight: 1.5,
                    opacity: 0.9,
                    fillOpacity: 0.85,
                    zIndexOffset: zIndex
                });
            },
            onEachFeature: (feature, l) => {
                const attrHtml = buildAttributeTableHTML(feature.properties);

                l.bindPopup(`
                    <div style="color:#000; font-family:sans-serif; max-width:280px;">
                        <h4 style="margin:0 0 4px 0; color:#0284c7; font-size:0.85rem;">${displayName}</h4>
                        <div style="margin-bottom:6px;">
                            <strong>Warning Level:</strong> 
                            <span style="background:${color}; color:${warningLevel === '1' ? '#000' : '#fff'}; padding:2px 6px; border-radius:3px; font-weight:bold; font-size:0.75rem;">
                                ${warningLevel}
                            </span>
                        </div>
                        <strong>Feature Properties:</strong>
                        ${attrHtml}
                    </div>
                `);

                l.on('click', (e) => {
                    L.DomEvent.stopPropagation(e);

                    if (highlightedLayer && highlightedLayer !== l) {
                        if (typeof highlightedLayer._parentLayerGroup?.resetStyle === 'function') {
                            highlightedLayer._parentLayerGroup.resetStyle(highlightedLayer);
                        }
                    }

                    highlightedLayer = l;
                    l._parentLayerGroup = currentLayerGroup;

                    if (typeof l.setStyle === 'function') {
                        l.setStyle({
                            weight: 4,
                            color: '#fbbf24',
                            fillOpacity: 0.75
                        });
                    }
                    if (typeof l.bringToFront === 'function') {
                        l.bringToFront();
                    }
                });
            }
        });

        // Elevate critical warning layers to front
        if (['3', '2'].includes(warningLevel)) {
            setTimeout(() => {
                if (currentLayerGroup && typeof currentLayerGroup.bringToFront === 'function') {
                    currentLayerGroup.bringToFront();
                }
            }, 100);
        }

        return { key: awsKey, layer: currentLayerGroup, bounds: currentLayerGroup.getBounds(), name: displayName, warningLevel: warningLevel };
    } catch (err) {
        console.warn(`GeoJSON bypass for ${displayName}:`, err.message);
        return null;
    }
}

function updateMapLegendTitle(newTitle) {
    const titleContainer = document.getElementById('map-legend-title');
    if (titleContainer) {
        titleContainer.innerText = 'Map Legend';
    }
}

function renderMapLegend(targetMap) {
    if (mapLegendControl) {
        targetMap.removeControl(mapLegendControl);
    }

    mapLegendControl = L.control({ position: 'bottomright' });

    mapLegendControl.onAdd = function () {
        const div = L.DomUtil.create('div', 'map-legend-card');
        
        div.style.backgroundColor = 'rgba(15, 23, 42, 0.82)';
        div.style.backdropFilter = 'blur(8px)';
        div.style.webkitBackdropFilter = 'blur(8px)';
        div.style.border = '1px solid rgba(255, 255, 255, 0.15)';
        div.style.borderRadius = '8px';
        div.style.padding = '10px 12px';
        div.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';

        div.innerHTML = `
            <div class="legend-header">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <span id="map-legend-title">Map Legend</span>
            </div>
            <div class="legend-scale">
                <div class="legend-item">
                    <span class="legend-color" style="background:#dc2626;"></span>
                    <span>Level 3 (High Risk)</span>
                </div>
                <div class="legend-item">
                    <span class="legend-color" style="background:#fd7e14;"></span>
                    <span>Level 2 (Moderate)</span>
                </div>
                <div class="legend-item">
                    <span class="legend-color" style="background:#facc15;"></span>
                    <span>Level 1 (Low Risk)</span>
                </div>
                <div class="legend-item">
                    <span class="legend-color" style="background:#9ca3af;"></span>
                    <span>N/A / No Data</span>
                </div>
                <div class="legend-item" style="margin-top: 4px; border-top: 1px dashed var(--border-color, #cbd5e1); padding-top: 4px; display: flex; align-items: center; gap: 6px;">
                    <img src="https://ligtas.uplb.edu.ph/wp-content/uploads/2022/04/3-e1659971771933.png" alt="LIGTAS-AGAD AWS" style="width: 16px; height: 16px; object-fit: contain;">
                    <span>LIGTAS-AGAD AWS</span>
                </div>
                <div class="legend-item" style="margin-top: 4px; border-top: 1px dashed var(--border-color, #cbd5e1); padding-top: 4px; display: flex; align-items: center; gap: 6px;">
                    <img src="https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LOGO2.png" alt="LIGTAS-AGAD AWS" style="width: 16px; height: 16px; object-fit: contain;">
                    <span>PAGASA AWS</span>
                </div>
            </div>
            <div class="legend-scale" style="margin-top:4px;">
                <div class="legend-item">
                    <span class="legend-color" style="background:#C4A484;"></span>
                    <span>DPWH Roads</span>
                </div>
                <div class="legend-item">
                    <span class="legend-color" style="background:#f97316; border-radius:50%;"></span>
                    <span>Recorded Landslide Events</span>
                </div>
            </div>
        `;
        L.DomEvent.disableClickPropagation(div);
        return div;
    };

    mapLegendControl.addTo(targetMap);
}

function switchRegion(regionId) {
    currentRegionId = regionId;
    clearGeoJson();

    document.getElementById('loading-text').innerText = 'Fetching Advisory Data...';
    document.getElementById('loading-overlay').style.display = 'flex';

    const config = CONFIG[regionId];
    
    document.getElementById('region-title').innerHTML = config.title;
    document.getElementById('threshold-value').innerText = config.threshold;
    document.getElementById('table-footer-label').innerText = config.footer;
    document.getElementById('error-message').style.display = 'none';
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const targetBtn = document.getElementById(`btn-${regionId}`);
    if (targetBtn) targetBtn.classList.add('active');

    syncCurrentTime();
    renderFooterCredits();

    fetchData(config.url);
}

function fetchData(url) {
    Papa.parse(url, {
        download: true,
        header: true,
        complete: async function(results) {
            const rawData = results.data.filter(row => row.AWS_Name);
            if (rawData.length > 0) {
                rawData.forEach(row => {
                    row._awsKey = matchAwsKey(row.AWS_Name);
                });

                // Apply hierarchy sorting to dataset
                currentCsvData = sortDataByWarningHierarchy(rawData);

                filterAwsLayersByRegion(currentCsvData);

                syncCurrentTime();
                
                await updateMap(currentCsvData);
                applyAwsFilters();
            } else {
                handleError("No data found in dataset.");
            }
            document.getElementById('loading-overlay').style.display = 'none';
        },
        error: function(err) {
            handleError("Connection Timeout or CSV Load Error.");
            document.getElementById('loading-overlay').style.display = 'none';
        }
    });
}

function updateAutomatedBulletin(visibleData) {
    const config = CONFIG[currentRegionId] || CONFIG['car'];
    
    let maxLevel = 0;
    visibleData.forEach(row => {
        const lvl = parseInt(row.Warning, 10);
        if (!isNaN(lvl) && lvl > maxLevel) {
            maxLevel = lvl;
        }
    });

    const levelStr = String(maxLevel);
    const cardEl = document.getElementById('bulletin-banner-card');
    cardEl.className = `bulletin-card level-${levelStr}`;

    const alertTitleEl = document.getElementById('bulletin-alert-title');
    const regionLabelEl = document.getElementById('bulletin-region-label');
    
    let levelText = ': NO ACTIVE WARNINGS (Normal)';
    if (levelStr === '3') levelText = 'LEVEL 3 (High Risk/Critical)';
    else if (levelStr === '2') levelText = 'LEVEL 2 (Moderate Risk)';
    else if (levelStr === '1') levelText = 'LEVEL 1 (Low Risk / Advisory)';

    alertTitleEl.innerText = `LANDSLIDE ALERT ${levelText}`;
    regionLabelEl.innerText = `${config.provinceName} | ${config.regionName}`;

    const hazardEl = document.getElementById('bulletin-hazard-text');
    if (levelStr === '3') {
        hazardEl.innerText = 'Mataas ang panganib ng pagguho ng lupa sa susunod na 12 oras!';
    } else if (levelStr === '2') {
        hazardEl.innerText = 'Posibleng magkaroon ng pagguho ng lupa sa mga dalisdis at kabundukan.';
    } else if (levelStr === '1') {
        hazardEl.innerText = 'Panatilihin ang pagsubaybay sa lagay ng panahon at ulan.';
    } else {
        hazardEl.innerText = 'Ligtas at normal na kalagayan. Manatiling alerto.';
    }

    const affectedMunis = Array.from(new Set(
        visibleData
            .filter(d => String(d.Warning).trim() === levelStr || (maxLevel === 0))
            .map(d => d.Municipality ? d.Municipality.trim() : '')
            .filter(Boolean)
    ));

    let formattedMunis = affectedMunis.join(', ');
    if (affectedMunis.length > 1) {
        const lastMuni = affectedMunis.pop();
        formattedMunis = affectedMunis.join(', ') + ', at ' + lastMuni;
    } else if (affectedMunis.length === 0) {
        formattedMunis = 'Lahat ng bayan sa sakop na probinsya';
    }

    document.getElementById('bulletin-municipality-list').innerText = formattedMunis;

    const levelBadgeEl = document.getElementById('bulletin-level-badge');
    levelBadgeEl.className = `inline-level-badge level-${levelStr}`;
    levelBadgeEl.innerText = `LANDSLIDE ALERT ${levelText}`;

    const lguActionEl = document.getElementById('bulletin-lgu-action');
    if (levelStr === '3') {
        lguActionEl.innerText = 'Iniaatas sa lahat ng kinauukulang Local Chief Executives at DRRM Officers ang agarang pagpapatupad ng kani-kanilang localized Emergency Response Plans, kabilang ang pagmamasad sa mga critical slopes, pagpapatupad ng pre-emptive evacuation sa mga flood at landslide-prone areas, at ang patuloy na pagpapaalala sa publiko.';
    } else if (levelStr === '2') {
        lguActionEl.innerText = 'Ihanda ang Emergency Response Units. Isagawa ang inspeksyon sa mga hazard areas at payuhan ang BDRRMC na maging handa sa posibleng evacuation.';
    } else {
        lguActionEl.innerText = 'Maging alerto at magpatupad ng patuloy na pagsubaybay sa mga weather station at rainfall thresholds sa sakop na hurisdiksyon.';
    }

    const publicListEl = document.getElementById('bulletin-public-action-list');
    if (levelStr === '3' || levelStr === '2') {
        publicListEl.innerHTML = `
            <li>⚠️ <span>Manatiling Alerto at Mag-ingat.</span></li>
            <li>🎒 <span>Ihanda ang Emergency Kit (Go Bag).</span></li>
            <li>🏃 <span>Maging Handa na Lumikas kapag Inatasan.</span></li>
            <li>🚫 <span>Iwasan ang mga Daan na may panganib ng pagguho.</span></li>
        `;
    } else {
        publicListEl.innerHTML = `
            <li>⚠️ <span>Manatiling nakatutok sa mga opisyal na ulat ng DRRMC.</span></li>
            <li>📻 <span>Makinig sa mga lokal na babala sa panahon.</span></li>
            <li>🎒 <span>Siguraduhing handa ang mga pangunahing gamit.</span></li>
        `;
    }
}

function updateTable(data) {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';

    const visibleData = data.filter(row => !row._awsKey || awsLayerState[row._awsKey] !== false);
    
    // Sort table rows by warning hierarchy (High Risk on top)
    const sortedVisibleData = sortDataByWarningHierarchy(visibleData);

    sortedVisibleData.forEach(row => {
        const tr = document.createElement('tr');
        const color = getWarningColor(row.Warning);
        tr.innerHTML = `
            <td>${row.AWS_Name}</td>
            <td>${row.Municipality}</td>
            <td>${row.Cumulative}</td>
            <td><span class="warning-badge" style="background-color:${color}; color: ${row.Warning === '1' ? '#000' : '#fff'}">${row.Warning}</span></td>
        `;
        tbody.appendChild(tr);
    });

    return sortedVisibleData;
}

function setAwsMarkerLabelStyle(marker) {
    if (!marker) return;
    const existingTooltip = marker.getTooltip();
    if (existingTooltip) {
        existingTooltip.options.className = 'aws-label';
    }
}

function updateAwsMarkerVisibility(item, isVisible) {
    if (!map || !item || !item.marker) return;

    if (isVisible) {
        if (!map.hasLayer(item.marker)) {
            map.addLayer(item.marker);
        }
        setAwsMarkerLabelStyle(item.marker);
    } else {
        if (map.hasLayer(item.marker)) {
            map.removeLayer(item.marker);
        }
    }
}

async function updateMap(data) {
    if (map) map.remove();
    map = L.map('advisory-map').setView([12.8797, 121.7740], 6);

    if (!map.getPane('boundaryPane')) {
        map.createPane('boundaryPane');
        map.getPane('boundaryPane').style.zIndex = 350;
    }

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri',
        crossOrigin: true
    }).addTo(map);

    leafletLayerControl = L.control.layers(null, null, { collapsed: true, position: 'topright' }).addTo(map);

    const activeRegionConfig = CONFIG[currentRegionId];
    const initialLegendTitle = activeRegionConfig ? `${activeRegionConfig.regionName} Advisories` : 'Advisory Levels';
    renderMapLegend(map, initialLegendTitle);

    createGeoJSONLayer(
        'LIGTAS-BOUNDARIES',
        'Regional Boundaries',
        'https://raw.githubusercontent.com/Gabzrock/LIGTASAGADsites/refs/heads/main/LIGTAS-AGAD_sites2.geojson',
        {
            color: 'white',
            fillColor: 'transparent',
            fillOpacity: 0,
            weight: 1.5,
            pane: 'boundaryPane'
        },
        null
    );

    lsdbLayer = await createGeoJSONLayer(
        'LIGTAS-LSDB',
        'Recorded Landslides',
        'https://raw.githubusercontent.com/Gabzrock/LIGTAS-AGAD/refs/heads/main/LandslideDB-web.geojson',
        {
            color: 'orange',
            fillColor: 'orange',
            fillOpacity: 0.8,
            radius: 6,
            weight: 1,
            pane: 'markerPane'
        },
        null
    );

    map.on('popupclose', () => {
        if (highlightedLayer) {
            if (typeof highlightedLayer._parentLayerGroup?.resetStyle === 'function') {
                highlightedLayer._parentLayerGroup.resetStyle(highlightedLayer);
            }
            highlightedLayer = null;
        }
    });

    const warningMap = {};
    data.forEach(row => {
        if (row.AWS_Name) {
            warningMap[row.AWS_Name.trim()] = String(row.Warning).trim();
        }
    });

    awsLayersRegistry = {};
    
    const awsSyncPromises = AWS_CONFIG_LIST.map(cfg => 
        initSynchronizedAWSLayer(cfg.key, cfg.url, cfg.name, warningMap)
    );

    const syncResults = await Promise.all(awsSyncPromises);

    syncResults.forEach(res => {
        if (res && res.layer) {
            awsLayersRegistry[res.key] = res;
            leafletLayerControl.addOverlay(res.layer, res.name);
        }
    });

    // Apply hierarchy sorting & anti-overlap spatial offset
    const sortedData = sortDataByWarningHierarchy(data);
    const adjustedData = applyOverlapOffset(sortedData);

    stationMarkersRegistry = [];
    adjustedData.forEach(item => {
        if (item._renderLat && item._renderLng) {
            const coords = [item._renderLat, item._renderLng];
            const warningPriority = getWarningLevelPriority(item.Warning);
            
            let marker;
            const activeIconUrl = currentCustomIconUrl || item.Icon_URL;

            if (activeIconUrl) {
                const customIcon = L.icon({
                    iconUrl: activeIconUrl,
                    iconSize: [36, 36],
                    iconAnchor: [18, 36],
                    popupAnchor: [0, -36]
                });
                marker = L.marker(coords, { 
                    icon: customIcon,
                    zIndexOffset: warningPriority 
                });
            } else {
                marker = L.circleMarker(coords, { 
                    radius: 7, 
                    fillColor: getWarningColor(item.Warning),
                    color: '#ffffff',
                    weight: 1.5,
                    opacity: 0.9,
                    fillOpacity: 0.85,
                    zIndexOffset: warningPriority
                });
            }

            marker.bindTooltip(item.AWS_Name, { 
                permanent: true, 
                direction: 'bottom',
                offset: [0, 8], 
                className: 'aws-label' 
            });

            stationMarkersRegistry.push({
                awsKey: item._awsKey,
                marker: marker,
                coords: coords,
                warningPriority: warningPriority
            });
        }
    });

    if (currentCustomGeoJsonData) {
        renderGeoJsonData(currentCustomGeoJsonData);
    }

    map.on('overlayadd', (e) => {
        if (lsdbLayer && e.layer === lsdbLayer) {
            awsLayerState['LIGTAS-LSDB'] = true;
            syncAwsControlUI();
            return;
        }
        for (const [key, item] of Object.entries(awsLayersRegistry)) {
            if (item.layer === e.layer) {
                awsLayerState[key] = true;
                applyAwsFilters();
                updateMapLegendTitle(`${item.name} Layer`);
                break;
            }
        }
    });

    map.on('overlayremove', (e) => {
        if (lsdbLayer && e.layer === lsdbLayer) {
            awsLayerState['LIGTAS-LSDB'] = false;
            syncAwsControlUI();
            return;
        }
        for (const [key, item] of Object.entries(awsLayersRegistry)) {
            if (item.layer === e.layer) {
                awsLayerState[key] = false;
                applyAwsFilters();
                break;
            }
        }
    });

    setTimeout(() => {
        if (map) map.invalidateSize();
    }, 100);
}

function applyAwsFilters() {
    if (!map) return;

    const boundsToFocus = [];

    if (lsdbLayer) {
        if (awsLayerState['LIGTAS-LSDB'] !== false) {
            if (!map.hasLayer(lsdbLayer)) map.addLayer(lsdbLayer);
        } else {
            if (map.hasLayer(lsdbLayer)) map.removeLayer(lsdbLayer);
        }
    }

    for (const [key, item] of Object.entries(awsLayersRegistry)) {
        if (awsLayerState[key] !== false) {
            if (!map.hasLayer(item.layer)) map.addLayer(item.layer);
            if (item.bounds && item.bounds.isValid()) {
                boundsToFocus.push(item.bounds);
            }
        } else {
            if (map.hasLayer(item.layer)) map.removeLayer(item.layer);
        }
    }

    stationMarkersRegistry.forEach(item => {
        const isEnabled = !item.awsKey || awsLayerState[item.awsKey] !== false;
        
        updateAwsMarkerVisibility(item, isEnabled);

        if (isEnabled) {
            boundsToFocus.push(L.latLngBounds([item.coords]));
        }
    });

    const visibleTableData = updateTable(currentCsvData);
    updateAutomatedBulletin(visibleTableData);

    if (boundsToFocus.length > 0) {
        const combinedBounds = boundsToFocus.reduce((acc, b) => acc.extend(b));
        map.fitBounds(combinedBounds.pad(0.2));
    }

    syncAwsControlUI();
}

function buildAwsControlUI() {
    const listContainer = document.getElementById('aws-checkbox-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    let activeCount = 0;

    AWS_CONFIG_LIST.forEach(item => {
        const isChecked = awsLayerState[item.key] !== false;
        if (isChecked) activeCount++;

        const row = document.createElement('label');
        row.className = 'aws-item-row';
        row.innerHTML = `
            <input type="checkbox" data-aws-key="${item.key}" ${isChecked ? 'checked' : ''} onchange="toggleAwsLayer('${item.key}', this.checked)" />
            <span>${item.name}</span>
        `;
        listContainer.appendChild(row);
    });

    const divider = document.createElement('hr');
    divider.style.cssText = 'margin: 8px 0; border: 0; border-top: 1px dashed var(--border-color, rgba(255, 255, 255, 0.15));';
    listContainer.appendChild(divider);

    const isLsdbChecked = awsLayerState['LIGTAS-LSDB'] !== false;
    const lsdbRow = document.createElement('label');
    lsdbRow.className = 'aws-item-row';
    lsdbRow.innerHTML = `
        <input type="checkbox" data-aws-key="LIGTAS-LSDB" ${isLsdbChecked ? 'checked' : ''} onchange="toggleAwsLayer('LIGTAS-LSDB', this.checked)" />
        <span style="display: flex; align-items: center; gap: 6px; font-weight: 600;">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #f97316; display: inline-block;"></span>
            Recorded Landslides
        </span>
    `;
    listContainer.appendChild(lsdbRow);

    document.getElementById('aws-active-count').innerText = `${activeCount}/${AWS_CONFIG_LIST.length}`;
}

function syncAwsControlUI() {
    let activeCount = 0;
    AWS_CONFIG_LIST.forEach(item => {
        const isChecked = awsLayerState[item.key] !== false;
        if (isChecked) activeCount++;
        const cb = document.querySelector(`input[data-aws-key="${item.key}"]`);
        if (cb) cb.checked = isChecked;
    });

    const lsdbCb = document.querySelector(`input[data-aws-key="LIGTAS-LSDB"]`);
    if (lsdbCb) lsdbCb.checked = awsLayerState['LIGTAS-LSDB'] !== false;

    document.getElementById('aws-active-count').innerText = `${activeCount}/${AWS_CONFIG_LIST.length}`;
}

function toggleAwsLayer(key, enable) {
    awsLayerState[key] = enable;
    applyAwsFilters();
}

function selectAllAwsLayers(enableAll) {
    AWS_CONFIG_LIST.forEach(item => {
        awsLayerState[item.key] = enableAll;
    });
    awsLayerState['LIGTAS-LSDB'] = enableAll;
    applyAwsFilters();
}

function toggleAwsMenu(e) {
    if (e) e.stopPropagation();
    const panel = document.getElementById('aws-menu-panel');
    if (panel) {
        buildAwsControlUI();
        panel.classList.toggle('show');
    }
}

// Global click listener dismisses dropdown when clicking outside
document.addEventListener('click', (e) => {
    const panel = document.getElementById('aws-menu-panel');
    const wrapper = document.querySelector('.aws-dropdown-wrapper');
    if (panel && panel.classList.contains('show')) {
        if (wrapper && !wrapper.contains(e.target)) {
            panel.classList.remove('show');
        }
    }
});

function handleCustomIconUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        currentCustomIconUrl = e.target.result;
        if (currentCustomGeoJsonData) {
            renderGeoJsonData(currentCustomGeoJsonData);
        }
        if (currentCsvData.length > 0) {
            updateMap(currentCsvData);
        }
        event.target.value = '';
    };
    reader.readAsDataURL(file);
}

function setPresetIcon(iconUrl) {
    currentCustomIconUrl = iconUrl;
    if (currentCustomGeoJsonData) {
        renderGeoJsonData(currentCustomGeoJsonData);
    }
    if (currentCsvData.length > 0) {
        updateMap(currentCsvData);
    }
}

function renderGeoJsonData(geoData, customLayerName = 'Custom GeoJSON Overlay') {
    clearGeoJson();
    currentCustomGeoJsonData = geoData;

    const selectedColor = document.getElementById('geojson-color')?.value || '#3b82f6';

    updateMapLegendTitle(customLayerName);

    geojsonLayer = L.geoJSON(geoData, {
        pointToLayer: function (feature, latlng) {
            const level = feature.properties?.Warning || feature.properties?.warning || feature.properties?.LEVEL;
            const color = level !== undefined ? getWarningColor(level) : selectedColor;
            const zIndex = level !== undefined ? getWarningLevelPriority(level) : 0;

            if (currentCustomIconUrl) {
                const customIcon = L.icon({
                    iconUrl: currentCustomIconUrl,
                    iconSize: [32, 32],
                    iconAnchor: [16, 32],
                    popupAnchor: [0, -32]
                });
                return L.marker(latlng, { icon: customIcon, zIndexOffset: zIndex });
            }

            return L.circleMarker(latlng, {
                radius: 7,
                fillColor: color,
                color: '#ffffff',
                weight: 1.5,
                opacity: 0.9,
                fillOpacity: 0.85,
                zIndexOffset: zIndex
            });
        },
        style: function (feature) {
            const level = feature.properties?.Warning || feature.properties?.warning || feature.properties?.LEVEL;
            const color = level !== undefined ? getWarningColor(level) : selectedColor;
            return {
                color: color,
                fillColor: color,
                fillOpacity: 0.4,
                weight: 2
            };
        },
        onEachFeature: function (feature, layer) {
            const attrTableHtml = buildAttributeTableHTML(feature.properties);
            const popupHtml = `
                <div style="color:#0f172a; font-family:sans-serif; min-width: 200px; max-width: 280px;">
                    <h4 style="margin: 0 0 6px 0; font-size: 0.85rem; color: #0284c7; border-bottom: 2px solid #38bdf8; padding-bottom: 4px;">
                        GeoJSON Feature Attributes
                    </h4>
                    ${attrTableHtml}
                </div>
            `;
            layer.bindPopup(popupHtml);

            layer.on('click', function (e) {
                L.DomEvent.stopPropagation(e);

                if (highlightedLayer && highlightedLayer !== layer) {
                    if (typeof highlightedLayer._parentLayerGroup?.resetStyle === 'function') {
                        highlightedLayer._parentLayerGroup.resetStyle(highlightedLayer);
                    }
                }

                highlightedLayer = layer;
                layer._parentLayerGroup = geojsonLayer;

                if (typeof layer.setStyle === 'function') {
                    layer.setStyle({
                        weight: 4,
                        color: '#fbbf24',
                        fillOpacity: 0.75
                    });
                }

                if (typeof layer.bringToFront === 'function') {
                    layer.bringToFront();
                }
            });
        }
    }).addTo(map);

    if (geojsonLayer.getBounds().isValid()) {
        map.fitBounds(geojsonLayer.getBounds());
    }
}

function loadGeoJsonUrl() {
    const url = document.getElementById('geojson-url').value.trim();
    if (!url) return alert('Please enter a valid GeoJSON URL.');

    fetchWithTimeout(url, { timeout: 8000 })
        .then(response => {
            if (!response.ok) throw new Error('HTTP error: ' + response.statusText);
            return response.json();
        })
        .then(geoData => {
            const fileName = url.split('/').pop().split('?')[0] || 'Remote GeoJSON';
            renderGeoJsonData(geoData, fileName);
        })
        .catch(err => {
            console.error(err);
            alert("Unable to fetch or render GeoJSON: " + err.message);
        });
}

function handleGeoJsonFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const geoData = JSON.parse(e.target.result);
            renderGeoJsonData(geoData, file.name);
            event.target.value = '';
        } catch (err) {
            alert('Invalid GeoJSON file format.');
            console.error(err);
        }
    };
    reader.readAsText(file);
}

function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const customLogoImg = document.getElementById('custom-logo-img');
        const customLogoContainer = document.getElementById('custom-logo-container');
        if (customLogoImg && customLogoContainer) {
            customLogoImg.src = e.target.result;
            customLogoContainer.style.display = 'block';
        }
        event.target.value = '';
    };
    reader.readAsDataURL(file);
}

function updateGeoJsonColor(color) {
    if (geojsonLayer) {
        geojsonLayer.setStyle({
            color: color,
            fillColor: color,
            fillOpacity: 0.85,
            weight: 2
        });
    }
}

function clearGeoJson() {
    if (geojsonLayer && map) {
        map.removeLayer(geojsonLayer);
        geojsonLayer = null;
    }
    highlightedLayer = null;
    currentCustomGeoJsonData = null;
    const inputEl = document.getElementById('geojson-url');
    if (inputEl) inputEl.value = '';

    updateMapLegendTitle('LIGTAS-AGAD Legend');
}

function handleError(msg) {
    const errDiv = document.getElementById('error-message');
    if (errDiv) { errDiv.innerText = msg; errDiv.style.display = 'block'; }
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    syncCurrentTime();
    renderFooterCredits();

    const awsMenuPanel = document.getElementById('aws-menu-panel');
    if (awsMenuPanel) {
        awsMenuPanel.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    const dashboard = document.getElementById('dashboard-content');
    const leftPanel = document.getElementById('left-panel');
    const resizer = document.getElementById('resizer');

    if (!resizer || !dashboard || !leftPanel) return;

    let isDragging = false;

    const startDrag = () => {
        if (window.innerWidth <= 768) return;
        
        isDragging = true;
        resizer.classList.add('dragging');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    };

    const doDrag = (e) => {
        if (!isDragging || window.innerWidth <= 768) return;

        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        if (!clientX) return;

        const containerRect = dashboard.getBoundingClientRect();
        const resizerWidth = resizer.offsetWidth;
        
        let mouseX = clientX - containerRect.left;

        const minPx = 280;
        const maxPx = containerRect.width - minPx - resizerWidth;
        mouseX = Math.max(minPx, Math.min(mouseX, maxPx));

        const leftWidthPercent = (mouseX / containerRect.width) * 100;
        leftPanel.style.flex = `0 0 ${leftWidthPercent}%`;

        if (map) {
            map.invalidateSize();
        }
    };

    const stopDrag = () => {
        if (isDragging) {
            isDragging = false;
            resizer.classList.remove('dragging');
            document.body.style.cursor = '';
            document.body.style.userSelect = '';

            if (map) {
                map.invalidateSize();
            }
        }
    };

    resizer.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768 && leftPanel.style.flex) {
            leftPanel.style.flex = ''; 
        }
        if (map) {
            map.invalidateSize();
        }
    });
});

window.onload = () => switchRegion('car');
