const CONFIG = {
    'car': {
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSosfBP3StMyRUzwI0tUZPsLjPVH1zePCz8gZbTMOzjOvnonbmNCoy5VT46UxO0qdqb-Wm9EqTpXp8y/pub?gid=989357250&single=true&output=csv',
        title: '<span class="brand-inline">LIGTAS-AGAD</span> CAR <span class="highlight">Landslide Warning Advisory</span>',
        regionName: 'CORDILLERA ADMINISTRATIVE REGION (CAR)',
        provinceName: 'PROBINSYA NG BENGUET AT CORDILLERA',
        threshold: '64 mm',
        footer: 'Computed threshold in Cordillera Administrative Region (CAR)'
    },
    'car-2': {
        url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSosfBP3StMyRUzwI0tUZPsLjPVH1zePCz8gZbTMOzjOvnonbmNCoy5VT46UxO0qdqb-Wm9EqTpXp8y/pub?gid=1838395441&single=true&output=csv',
        title: '<span class="brand-inline">LIGTAS-AGAD</span> CAR <span class="highlight">Landslide Warning Advisory</span>',
        regionName: 'CORDILLERA ADMINISTRATIVE REGION (CAR)',
        provinceName: 'PROBINSYA NG BENGUET',
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
    { key: 'LANDGRANT', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_Landgrant%20AWS_RIL_HL.geojson', name: 'LIGTAS LANDGRANT AWS', defaultEnabled: true },
    { key: 'NAC', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_NAC%20AWS_RIL_HL.geojson', name: 'LIGTAS NAC 2026', defaultEnabled: true },
    { key: 'PGPC', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_PGPC%20AWS_RIL_HL.geojson', name: 'VOTE PGPC AWS', defaultEnabled: true },
    { key: 'MANKAYAN', url: 'https://api.maptiler.com/data/019f44a0-c1f3-7d6c-a4cd-bf01ec8769e3/features.json?key=HnKlTumvQGjlZFqKA35V', name: 'LIGTAS MANKAYAN AWS', defaultEnabled: true },
    { key: 'BUGUIAS', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_Buguias%20AWS_RIL_HL.geojson', name: 'LIGTAS BUGUIAS AWS', defaultEnabled: true },
    { key: 'BOKOD', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_Bokod%20AWS_RIL_HL.geojson', name: 'LIGTAS BOKOD AWS', defaultEnabled: true },
    { key: 'COROZ', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_Coroz%20AWS_RIL_HL.geojson', name: 'LIGTAS COROZ AWS', defaultEnabled: true },
    { key: 'ITOGON', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_Itogon%20AWS_RIL_HL.geojson', name: 'LIGTAS ITOGON AWS', defaultEnabled: true },
    { key: 'CATANAUAN', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_Catanauan%20AWS_RIL_HL.geojson', name: 'LIGTAS CATANAUAN AWS', defaultEnabled: true },
    { key: 'CATARMAN', url: 'https://raw.githubusercontent.com/Gabzrock/LIGTASkanaba/refs/heads/main/LIGTAS_Catarman%20AWS_RIL_HL.geojson', name: 'LIGTAS UEP-CATARMAN AWS', defaultEnabled: true },
    { key: 'Los Banos, Laguna AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/UPLB%20Laguna%20AWS_RIL_HL.geojson', name: 'PAGASA-UP Los Banos, Laguna AWS', defaultEnabled: true },
    { key: 'Polillio-Quezon AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Polilo%20Quezon%20AWS_RIL_HL.geojson', name: 'PAGASA-Polillio-Quezon AWS', defaultEnabled: true },
    { key: 'Mulanay, Quezon AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Mulanay%20Quezon%20AWS_RIL_HL.geojson', name: 'PAGASA-Mulanay, Quezon AWS', defaultEnabled: true },
    { key: 'Pili Camarines Sur AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Pili%20Camarines%20Sur%20AWS_RIL_HL.geojson', name: 'PAGASA-Pili Camarines Sur AWS', defaultEnabled: true },
    { key: 'Legazpi AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Legazpi%20Albay%20AWS_RIL_HL.geojson', name: 'PAGASA-Legazpi AWS', defaultEnabled: true },
    { key: 'Northern-Samar AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Catarman%20Northern%20Samar%20AWS_RIL_HL.geojson', name: 'PAGASA-Northern-Samar AWS', defaultEnabled: true },
    { key: 'Ambulong Tanauan Batangas AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Ambulong%20Tanauan%20Batangas%20AWS_RIL_HL.geojson', name: 'PAGASA-Ambulong Tanauan Batangas AWS', defaultEnabled: true },
    { key: 'Lipa, Batangas AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Lipa%20Batangas%20AWS_RIL_HL.geojson', name: 'PAGASA-Lipa, Batangas AWS', defaultEnabled: true },
    { key: 'Tayabas-Quezon AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Tayabas%20Quezon%20AWS_RIL_HL.geojson', name: 'PAGASA-Tayabas-Quezon AWS', defaultEnabled: true },
    { key: 'Tanay, Rizal AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Tanay%20Rizal%20AWS_RIL_HL.geojson', name: 'PAGASA-Tanay, Rizal AWS', defaultEnabled: true },
    { key: 'Sorsogon, Sorsogon AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Sorsogon%20Sorsogon%20AWS_RIL_HL.geojson', name: 'PAGASA-Sorsogon, Sorsogon AWS', defaultEnabled: true },
    { key: 'Virac, Catanduanes AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/Virac%20Catanduanes%20AWS_RIL_HL.geojson', name: 'PAGASA-Virac, Catanduanes AWS', defaultEnabled: true },
    { key: 'LIGTAS-AGAD PASIL AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/LIGTAS_Pasil%20AWS_RIL_HL.geojson', name: 'LIGTAS-AGAD PASIL AWS', defaultEnabled: true },
    { key: 'LIGTAS-AGAD Licuan-Baay AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/LIGTAS_Licuan%20Baay%20AWS_RIL_HL.geojson', name: 'LIGTAS-AGAD Licuan-Baay AWS', defaultEnabled: true },
    { key: 'LIGTAS-AGAD Calanasan AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/LIGTAS_Calanasan%20AWS_RIL_HL.geojson', name: 'LIGTAS-AGAD Calanasan AWS', defaultEnabled: true },
    { key: 'LIGTAS-AGAD Barlig AWS', url: 'https://raw.githubusercontent.com/LIGTAS-AGAD/LIGTAS/refs/heads/main/LIGTAS_Barlig%20AWS_RIL_HL.geojson', name: 'LIGTAS-AGAD Barlig AWS', defaultEnabled: true }
];

const ACTION_PROTOCOLS = {
    '3': {
        levelLabel: 'Warning Level 3 - High Risk',
        actionTitle: 'Mandatory Evacuation & Emergency Operations',
        details: 'Issue immediate emergency siren warnings. Execute pre-emptive/mandatory evacuation of families in high-risk zones. Activate municipal Emergency Operations Centers (EOC) and mobilize response units.',
        badgeClass: 'badge-level-3'
    },
    '2': {
        levelLabel: 'Warning Level 2 - Moderate Risk',
        actionTitle: 'Alert & Preparation',
        details: 'Alert Barangay Disaster Risk Reduction Management Committees (BDRRMCs). Advise communities to prepare "Go Bags", secure household structures, and monitor vulnerable slopes.',
        badgeClass: 'badge-level-2'
    },
    '1': {
        levelLabel: 'Warning Level 1 - Low Risk / Advisory',
        actionTitle: 'Awareness & Continuous Monitoring',
        details: 'Broadcast regular weather and rain updates to local communities. Conduct continuous monitoring of soil saturation and rainfall gauges.',
        badgeClass: 'badge-level-1'
    },
    '0': {
        levelLabel: 'Normal / Level 0',
        actionTitle: 'Standard Monitoring',
        details: 'Routine daily monitoring of automatic weather stations and weather forecasts.',
        badgeClass: 'badge-level-0'
    }
};

const TAGALOG_MONTHS = [
    'Enero', 'Pebreso', 'Marso', 'Abril', 'Mayo', 'Hunyo',
    'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre'
];

const geoJsonCache = new Map();

let map;
let leafletLayerControl = null;
let currentCsvData = [];
let currentRegionId = 'car';
let stationMarkersRegistry = []; 
let awsLayersRegistry = {}; 
let awsLayerState = {};    
let geojsonLayer = null;
let currentCustomGeoJsonData = null;

AWS_CONFIG_LIST.forEach(item => {
    awsLayerState[item.key] = item.defaultEnabled !== false;
});

/**
 * Enforces Philippine Standard Time (Asia/Manila) local time formatting
 */
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

/**
 * Synchronizes header & bulletin date tags with live local time
 */
function syncCurrentTime() {
    const formattedDate = formatTagalogDateTime();
    const rainfallDateEl = document.getElementById('rainfall-date');
    const bulletinDateEl = document.getElementById('bulletin-datetime');

    if (rainfallDateEl) rainfallDateEl.innerText = formattedDate;
    if (bulletinDateEl) bulletinDateEl.innerText = formattedDate;
}

// Automatically refresh time every 30 seconds
setInterval(syncCurrentTime, 30000);

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

async function initSynchronizedAWSLayer(awsKey, geoJsonUrl, displayName, warningMap) {
    const warningLevel = findWarningLevel(awsKey, warningMap);
    const color = getWarningColor(warningLevel);

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

        const layer = L.geoJSON(geoData, {
            style: {
                color: color,
                fillColor: color,
                fillOpacity: 0.45,
                weight: 2
            },
            onEachFeature: (feature, l) => {
                l.bindPopup(`
                    <div style="color:#000; font-family:sans-serif;">
                        <h4 style="margin:0 0 5px 0;">${displayName}</h4>
                        <strong>Warning Level:</strong> 
                        <span style="background:${color}; color:${warningLevel === '1' ? '#000' : '#fff'}; padding:2px 6px; border-radius:3px; font-weight:bold;">
                            ${warningLevel}
                        </span>
                    </div>
                `);
            }
        });

        return { key: awsKey, layer, bounds: layer.getBounds(), name: displayName };
    } catch (err) {
        console.warn(`GeoJSON bypass for ${displayName}:`, err.message);
        return null;
    }
}

function switchRegion(regionId) {
    currentRegionId = regionId;
    document.getElementById('loading-text').innerText = 'Fetching Advisory Data...';
    document.getElementById('loading-overlay').style.display = 'flex';

    const config = CONFIG[regionId];
    
    document.getElementById('region-title').innerHTML = config.title;
    document.getElementById('threshold-value').innerText = config.threshold;
    document.getElementById('table-footer-label').innerText = config.footer;
    document.getElementById('error-message').style.display = 'none';
    
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${regionId}`).classList.add('active');

    // Immediately update current local time upon switching regions
    syncCurrentTime();

    fetchData(config.url);
}

function fetchData(url) {
    Papa.parse(url, {
        download: true,
        header: true,
        complete: async function(results) {
            const data = results.data.filter(row => row.AWS_Name);
            if (data.length > 0) {
                data.forEach(row => {
                    row._awsKey = matchAwsKey(row.AWS_Name);
                });
                currentCsvData = data;

                syncCurrentTime();
                
                await updateMap(data);
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
    
    let levelText = 'LEVEL 0 (Normal)';
    if (levelStr === '3') levelText = 'LEVEL 3 (High Risk/Critical)';
    else if (levelStr === '2') levelText = 'LEVEL 2 (Moderate Risk)';
    else if (levelStr === '1') levelText = 'LEVEL 1 (Low Risk / Advisory)';

    alertTitleEl.innerText = `MATINDING BABALA: LANDSLIDE ALERT ${levelText}`;
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

    visibleData.forEach(row => {
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

    return visibleData;
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

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri',
        crossOrigin: true
    }).addTo(map);

    leafletLayerControl = L.control.layers(null, null, { collapsed: true, position: 'topright' }).addTo(map);

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

    stationMarkersRegistry = [];
    data.forEach(item => {
        if (item.Lat && item.Lng) {
            const coords = [parseFloat(item.Lat), parseFloat(item.Lng)];
            
            let marker;
            if (item.Icon_URL) {
                const customIcon = L.icon({
                    iconUrl: item.Icon_URL,
                    iconSize: [36, 36],
                    iconAnchor: [18, 36],
                    popupAnchor: [0, -36]
                });
                marker = L.marker(coords, { icon: customIcon });
            } else {
                marker = L.circleMarker(coords, { radius: 0, opacity: 0, fillOpacity: 0 });
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
                coords: coords
            });
        }
    });

    if (currentCustomGeoJsonData) {
        renderGeoJsonData(currentCustomGeoJsonData);
    }

    map.on('overlayadd', (e) => {
        for (const [key, item] of Object.entries(awsLayersRegistry)) {
            if (item.layer === e.layer) {
                awsLayerState[key] = true;
                applyAwsFilters();
                break;
            }
        }
    });

    map.on('overlayremove', (e) => {
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
    updateCommunicationActions(visibleTableData);
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

document.addEventListener('click', () => {
    const panel = document.getElementById('aws-menu-panel');
    if (panel && panel.classList.contains('show')) {
        panel.classList.remove('show');
    }
});

function updateCommunicationActions(data) {
    const actionsContainer = document.getElementById('actions-container');
    actionsContainer.innerHTML = '';

    const activeLevels = new Set(data.map(d => String(d.Warning).trim()).filter(w => ['0','1','2','3'].includes(w)));
    if (activeLevels.size === 0) activeLevels.add('0');

    ['3', '2', '1', '0'].forEach(level => {
        if (activeLevels.has(level)) {
            const protocol = ACTION_PROTOCOLS[level];
            const color = getWarningColor(level);
            
            const card = document.createElement('div');
            card.className = `action-card ${protocol.badgeClass}`;
            card.style.borderColor = color;

            card.innerHTML = `
                <div class="action-card-header" style="background-color: ${color}; color: ${level === '1' ? '#000' : '#fff'}">
                    <span>${protocol.levelLabel}</span>
                </div>
                <div class="action-card-body">
                    <h4>${protocol.actionTitle}</h4>
                    <p>${protocol.details}</p>
                </div>
            `;
            actionsContainer.appendChild(card);
        }
    });
}

function renderGeoJsonData(geoData) {
    clearGeoJson();
    currentCustomGeoJsonData = geoData;

    const selectedColor = document.getElementById('geojson-color')?.value || '#3b82f6';

    geojsonLayer = L.geoJSON(geoData, {
        pointToLayer: function (feature, latlng) {
            const level = feature.properties?.Warning || feature.properties?.warning || feature.properties?.LEVEL;
            const color = level !== undefined ? getWarningColor(level) : selectedColor;

            return L.circleMarker(latlng, {
                radius: 7,
                fillColor: color,
                color: '#ffffff',
                weight: 1.5,
                opacity: 0.9,
                fillOpacity: 0.85
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
            if (feature.properties) {
                let popupContent = '<div style="color:#000; font-family:sans-serif;">';
                for (const [key, val] of Object.entries(feature.properties)) {
                    popupContent += `<strong>${key}:</strong> ${val}<br>`;
                }
                popupContent += '</div>';
                layer.bindPopup(popupContent);
            }
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
            renderGeoJsonData(geoData);
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
            renderGeoJsonData(geoData);
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
    currentCustomGeoJsonData = null;
    document.getElementById('geojson-url').value = '';
}

function handleError(msg) {
    const errDiv = document.getElementById('error-message');
    if (errDiv) { errDiv.innerText = msg; errDiv.style.display = 'block'; }
}

function downloadAdvisory() {
    const node = document.getElementById('advisory-container');
    const loadingOverlay = document.getElementById('loading-overlay');
    const loadingText = document.getElementById('loading-text');

    loadingText.innerText = 'Generating Graphic Advisory Image...';
    loadingOverlay.style.display = 'flex';

    html2canvas(node, {
        useCORS: true,
        allowTaint: false,
        scale: 2,
        logging: false,
        backgroundColor: '#0c1a26',
        ignoreElements: (element) => element.id === 'loading-overlay'
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `ligtas-advisory-${currentRegionId}-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        loadingOverlay.style.display = 'none';
    }).catch(error => {
        console.error('Error generating image via html2canvas:', error);
        alert('Could not generate image. Check browser console.');
        loadingOverlay.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    syncCurrentTime();

    const dashboard = document.getElementById('dashboard-content');
    const leftPanel = document.getElementById('left-panel');
    const resizer = document.getElementById('resizer');

    if (!resizer || !dashboard || !leftPanel) return;

    let isDragging = false;

    const startDrag = () => {
        isDragging = true;
        resizer.classList.add('dragging');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
    };

    const doDrag = (e) => {
        if (!isDragging) return;

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

    resizer.addEventListener('touchstart', startDrag, { passive: true });
    document.addEventListener('touchmove', doDrag, { passive: true });
    document.addEventListener('touchend', stopDrag);
});

window.onload = () => switchRegion('car');