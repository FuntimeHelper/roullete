/**
 * BR x SO2 DROP — Protected Core Engine (Obfuscated Build)
 * Защита от копирования логики, пулов призов и партнерской ссылки конкурентами.
 */
(function(_0x9a1f, _0x4c2b) {
    const _0x2d8e = [
        'https://ioothub.xyz/drop',
        'br_gold_drop_bot',
        '🔥 Забирай блатные номера Black Russia и голду Standoff 2 бесплатно в рулетке!',
        'https://t.me/share/url?url=',
        'https://t.me/',
        '?startapp=true',
        '&text=',
        'br_so2_inventory',
        'br_so2_spins',
        'br_so2_pity',
        'br_so2_total_spins',
        'br_so2_shared',
        'br_so2_clan',
        'br_so2_quests',
        'br_so2_daily',
        'br_so2_clan_bonus'
    ];
    const _0x5f31 = function(_0x1b4a) {
        return _0x2d8e[_0x1b4a];
    };

    const _0x10a4 = _0x5f31(0);

    const _0x3e9b = {
        legendary: {
            name: '\u041b\u0435\u0433\u0435\u043d\u0434\u0430\u0440\u043d\u044b\u0439',
            border: 'border-amber-400/60',
            bg: 'from-amber-500/20 to-[#141722]',
            badge: 'bg-amber-500/20 text-amber-300 border-amber-400/40'
        },
        epic: {
            name: '\u042d\u043f\u0438\u0447\u0435\u0441\u043a\u0438\u0439',
            border: 'border-purple-500/50',
            bg: 'from-purple-500/20 to-[#141722]',
            badge: 'bg-purple-500/20 text-purple-300 border-purple-400/40'
        },
        rare: {
            name: '\u0420\u0435\u0434\u043a\u0438\u0439',
            border: 'border-blue-500/40',
            bg: 'from-blue-500/15 to-[#141722]',
            badge: 'bg-blue-500/20 text-blue-300 border-blue-400/40'
        },
        common: {
            name: '\u041e\u0431\u044b\u0447\u043d\u044b\u0439',
            border: 'border-slate-500/40',
            bg: 'from-slate-500/15 to-[#141722]',
            badge: 'bg-slate-500/20 text-slate-300 border-slate-400/40'
        }
    };

    const _0x7c12 = {
        plates: [
            { id: 'p_c1', game: 'br', type: 'plate', code: 'Е482ТВ', region: '58', valueText: 'Гос: 120.000 ₽', rarityKey: 'common' },
            { id: 'p_c2', game: 'br', type: 'plate', code: 'К914МН', region: '64', valueText: 'Гос: 145.000 ₽', rarityKey: 'common' },
            { id: 'p_c3', game: 'br', type: 'plate', code: 'Р305СХ', region: '116', valueText: 'Гос: 110.000 ₽', rarityKey: 'common' },
            { id: 'p_c4', game: 'br', type: 'plate', code: 'Т628УВ', region: '50', valueText: 'Гос: 160.000 ₽', rarityKey: 'common' },
            { id: 'p_c5', game: 'br', type: 'plate', code: 'У204НК', region: '73', valueText: 'Гос: 95.000 ₽', rarityKey: 'common' },
            { id: 'p_c6', game: 'br', type: 'plate', code: 'В831ОР', region: '36', valueText: 'Гос: 180.000 ₽', rarityKey: 'common' },
            { id: 'p_c7', game: 'br', type: 'plate', code: 'С519АЕ', region: '154', valueText: 'Гос: 130.000 ₽', rarityKey: 'common' },
            { id: 'p_c8', game: 'br', type: 'plate', code: 'Н742КМ', region: '23', valueText: 'Гос: 175.000 ₽', rarityKey: 'common' },
            { id: 'c_c1', game: 'br', type: 'car', icon: '🚗', name: 'ВАЗ 2107 Опера', statusText: 'Автосалон • 150.000 ₽', rarityKey: 'common' },
            { id: 'c_c2', game: 'br', type: 'car', icon: '🚙', name: 'Lada Priora Люкс', statusText: 'Тонировка • 380.000 ₽', rarityKey: 'common' },
            { id: 'c_c3', game: 'br', type: 'car', icon: '💵', name: '250.000 Игровых ₽', statusText: 'Банк BR • 250К', rarityKey: 'common' },
            { id: 'p_r1', game: 'br', type: 'plate', code: 'М100ММ', region: '99', valueText: 'Гос: 1.800.000 ₽', rarityKey: 'rare' },
            { id: 'p_r2', game: 'br', type: 'plate', code: 'У500УУ', region: '77', valueText: 'Гос: 2.400.000 ₽', rarityKey: 'rare' },
            { id: 'p_r3', game: 'br', type: 'plate', code: 'К070КК', region: '50', valueText: 'Гос: 1.500.000 ₽', rarityKey: 'rare' },
            { id: 'p_r4', game: 'br', type: 'plate', code: 'А808АА', region: '177', valueText: 'Гос: 2.100.000 ₽', rarityKey: 'rare' },
            { id: 'c_r1', game: 'br', type: 'car', icon: '🚘', name: 'Toyota Camry 3.5', statusText: 'Седан • 2.800.000 ₽', rarityKey: 'rare' },
            { id: 'c_r2', game: 'br', type: 'car', icon: '🏎️', name: 'BMW M3 E46', statusText: 'Дрифт корч • 2.2КК', rarityKey: 'rare' },
            { id: 'c_r3', game: 'br', type: 'car', icon: '💎', name: 'Platinum VIP (30 дн.)', statusText: 'Премиум статус BR', rarityKey: 'rare' },
            { id: 'p_e1', game: 'br', type: 'plate', code: 'В777ОР', region: '777', valueText: 'Гос: 9.500.000 ₽', rarityKey: 'epic' },
            { id: 'p_e2', game: 'br', type: 'plate', code: 'О777ОО', region: '777', valueText: 'Гос: 8.800.000 ₽', rarityKey: 'epic' },
            { id: 'c_e1', game: 'br', type: 'car', icon: '🏎️', name: 'BMW M5 F90 Comp', statusText: 'Спорткар • 12.5КК', rarityKey: 'epic' },
            { id: 'c_e2', game: 'br', type: 'car', icon: '🚓', name: 'Mercedes-AMG E63s', statusText: 'Stage 3 • 11.2КК', rarityKey: 'epic' },
            { id: 'p_l1', game: 'br', type: 'plate', code: 'А777АА', region: '777', valueText: 'Гос: 18.000.000 ₽', rarityKey: 'legendary' },
            { id: 'p_l2', game: 'br', type: 'plate', code: 'Е777КХ', region: '777', valueText: 'Гос: 22.000.000 ₽', rarityKey: 'legendary' },
            { id: 'c_l1', game: 'br', type: 'car', icon: '🔥', name: 'Mercedes G63 AMG', statusText: 'Гелик • 28.000.000 ₽', rarityKey: 'legendary' },
            { id: 'c_l2', game: 'br', type: 'car', icon: '⚡', name: 'Lamborghini Urus', statusText: 'Эксклюзив • 35.000.000 ₽', rarityKey: 'legendary' },
            { id: 'c_l3', game: 'br', type: 'car', icon: '👑', name: 'Bugatti Chiron', statusText: 'Гиперкар • 65.000.000 ₽', rarityKey: 'legendary' }
        ],
        gold: [
            { id: 'g_c1', game: 'so2', type: 'gold', icon: '🪙', amount: '25 G', statusText: 'Бонус SO2', rarityKey: 'common' },
            { id: 'g_c2', game: 'so2', type: 'gold', icon: '🪙', amount: '50 G', statusText: 'Стартовый баланс', rarityKey: 'common' },
            { id: 'g_c3', game: 'so2', type: 'gold', icon: '🪙', amount: '75 G', statusText: 'Пополнение по ID', rarityKey: 'common' },
            { id: 'g_c4', game: 'so2', type: 'gold', icon: '🪙', amount: '100 G', statusText: 'Мини-пак SO2', rarityKey: 'common' },
            { id: 's_c1', game: 'so2', type: 'skin', icon: '🔫', amount: 'G22 Nest (StatTrak)', statusText: 'Скин пистолета SO2', rarityKey: 'common' },
            { id: 's_c2', game: 'so2', type: 'skin', icon: '🔫', amount: 'AKR Carbon', statusText: 'Штурмовая винтовка', rarityKey: 'common' },
            { id: 's_c3', game: 'so2', type: 'skin', icon: '🔫', amount: 'Deagle Morgan', statusText: 'Классический скин', rarityKey: 'common' },
            { id: 'g_r1', game: 'so2', type: 'gold', icon: '🪙', amount: '250 G', statusText: 'Средний пак SO2', rarityKey: 'rare' },
            { id: 'g_r2', game: 'so2', type: 'gold', icon: '🪙', amount: '350 G', statusText: 'Призовой баланс', rarityKey: 'rare' },
            { id: 'g_r3', game: 'so2', type: 'gold', icon: '🪙', amount: '500 G', statusText: 'Популярный дроп', rarityKey: 'rare' },
            { id: 's_r1', game: 'so2', type: 'skin', icon: '🔫', amount: 'AKR Necromancer', statusText: 'Редкий скин SO2', rarityKey: 'rare' },
            { id: 's_r2', game: 'so2', type: 'skin', icon: '🔫', amount: 'M4 Samurai', statusText: 'Легендарная классика', rarityKey: 'rare' },
            { id: 's_r3', game: 'so2', type: 'skin', icon: '🎯', amount: 'AWM Genesis', statusText: 'Снайперский скин', rarityKey: 'rare' },
            { id: 'g_e1', game: 'so2', type: 'gold', icon: '🪙', amount: '1500 G', statusText: 'Крупный перевод', rarityKey: 'epic' },
            { id: 'g_e2', game: 'so2', type: 'gold', icon: '🪙', amount: '2500 G', statusText: 'Промо-пакет SO2', rarityKey: 'epic' },
            { id: 's_e1', game: 'so2', type: 'skin', icon: '🧤', amount: 'Gloves Autumn', statusText: 'Перчатки Standoff 2', rarityKey: 'epic' },
            { id: 's_e2', game: 'so2', type: 'skin', icon: '🧤', amount: 'Gloves Champion', statusText: 'Турнирные перчатки', rarityKey: 'epic' },
            { id: 'g_l1', game: 'so2', type: 'gold', icon: '🪙', amount: '5000 G', statusText: 'Моментальный вывод', rarityKey: 'legendary' },
            { id: 'g_l2', game: 'so2', type: 'gold', icon: '💎', amount: '10000 G', statusText: 'Мега-Джекпот SO2', rarityKey: 'legendary' },
            { id: 's_l1', game: 'so2', type: 'skin', icon: '🔪', amount: 'Karambit Gold', statusText: 'Легендарный нож SO2', rarityKey: 'legendary' },
            { id: 's_l2', game: 'so2', type: 'skin', icon: '🗡️', amount: 'M9 Bayonet Dragon Glass', statusText: 'Топ Нож Standoff 2', rarityKey: 'legendary' },
            { id: 's_l3', game: 'so2', type: 'skin', icon: '🦋', amount: 'Butterfly Legacy', statusText: 'Нож-бабочка SO2', rarityKey: 'legendary' }
        ]
    };

    let _0x8a11 = 'roulette',
        _0x8a12 = 'plates',
        _0x8a13 = 'all',
        _0x8a14 = false,
        _0x8a15 = true,
        _0x8a16 = null,
        _0x8a17 = [];

    try {
        _0x8a17 = JSON.parse(localStorage.getItem(_0x5f31(7)) || '[]');
        _0x8a17 = _0x8a17.map((_0x1c, _0x2c) => ({ ..._0x1c, uid: _0x1c.uid || ('item_' + Date.now() + '_' + _0x2c) }));
    } catch (_0xe) { _0x8a17 = []; }

    let _0x8a18 = parseInt(localStorage.getItem(_0x5f31(8)) || '3', 10);
    if (isNaN(_0x8a18)) _0x8a18 = 3;

    let _0x8a19 = parseInt(localStorage.getItem(_0x5f31(9)) || '1', 10);
    if (isNaN(_0x8a19)) _0x8a19 = 1;

    let _0x8a1a = parseInt(localStorage.getItem(_0x5f31(10)) || '0', 10);
    if (isNaN(_0x8a1a)) _0x8a1a = 0;

    let _0x8a1b = parseInt(localStorage.getItem(_0x5f31(11)) || '0', 10);
    if (isNaN(_0x8a1b)) _0x8a1b = 0;

    let _0x8a1c = null;
    try { _0x8a1c = JSON.parse(localStorage.getItem(_0x5f31(12)) || 'null'); } catch (_0xe) { _0x8a1c = null; }

    let _0x8a1d = {};
    try { _0x8a1d = JSON.parse(localStorage.getItem(_0x5f31(13)) || '{}'); } catch (_0xe) { _0x8a1d = {}; }

    let _0x8a1e = localStorage.getItem(_0x5f31(14)) === new Date().toDateString(),
        _0x8a1f = null,
        _0x8a20 = false,
        _0x8a21 = [],
        _0x8a22 = false,
        _0x8a23 = 299;

    const _0x8a24 = _0x9a1f.Telegram && _0x9a1f.Telegram.WebApp ? _0x9a1f.Telegram.WebApp : null;

    const _0x8a25 = [
        { user: '@br_maga77', prize: 'А777АА 777 (18КК)', action: 'вывел на сервер Grozny' },
        { user: '@so2_sniper', prize: '5000 G', action: 'забрал на ID аккаунта' },
        { user: '@khasan_05', prize: 'Toyota Camry 3.5', action: 'успешно получил в игре' },
        { user: '@danya_standoff', prize: 'Karambit Gold', action: 'выбил из рулетки' },
        { user: '@oper_style99', prize: 'Е777КХ 777 (22КК)', action: 'забрал блатной номер' },
        { user: '@timur_br', prize: 'BMW M5 F90 Comp', action: 'активировал промо-приз' },
        { user: '@gold_hunter', prize: 'AKR Necromancer', action: 'получил зачисление' },
        { user: '@maloy_777', prize: 'У500УУ 77 (2.4КК)', action: 'вывел через кнопку' }
    ];

    const _0x8a26 = [
        { name: 'SHELBY SQUAD', tag: '[SHLB]', members: 148, points: 48950, reward: '25,000 G' },
        { name: 'DAGESTAN MAFIA', tag: '[05]', members: 132, points: 44200, reward: '15,000 G' },
        { name: 'OPER STYLE BR', tag: '[OPER]', members: 119, points: 39800, reward: '10,000 G' },
        { name: 'NAVI JUNIOR SO2', tag: '[NAVI]', members: 94, points: 31450, reward: '5,000 G' },
        { name: 'GROZNY KINGS', tag: '[95]', members: 87, points: 28900, reward: '3,000 G' }
    ];

    const _0x44a1 = 55, _0x44a2 = 42, _0x44a3 = 132, _0x44a4 = 12;

    function _0x6b01(_0x1v) {
        if (_0x8a14) return;
        _0x6b02('selection');
        _0x8a11 = _0x1v;
        ['roulette', 'inventory', 'clans', 'quests'].forEach(_0xv => {
            const _0xel = _0x4c2b.getElementById('view-' + _0xv);
            const _0xnb = _0x4c2b.getElementById('navBtn-' + _0xv);
            if (_0xel) _0xel.classList.toggle('hidden', _0xv !== _0x1v);
            if (_0xnb) {
                _0xnb.className = _0xv === _0x1v
                    ? 'relative flex flex-col items-center justify-center py-1.5 rounded-xl text-amber-400 bg-amber-500/10 border border-amber-500/25 transition'
                    : 'relative flex flex-col items-center justify-center py-1.5 rounded-xl text-gray-400 hover:text-white transition';
            }
        });
        if (_0x1v === 'inventory') _0x6b14();
        if (_0x1v === 'clans') _0x6b15();
        if (_0x1v === 'quests') _0x6b19();
    }

    function _0x6b02(_0xt, _0xs) {
        try {
            if (_0x8a24 && _0x8a24.HapticFeedback) {
                if (_0xt === 'impact') _0x8a24.HapticFeedback.impactOccurred(_0xs || 'medium');
                else if (_0xt === 'notification') _0x8a24.HapticFeedback.notificationOccurred(_0xs || 'success');
                else if (_0xt === 'selection') _0x8a24.HapticFeedback.selectionChanged();
                return;
            }
            if (navigator.vibrate) navigator.vibrate(_0xt === 'notification' ? [40, 60, 90] : 15);
        } catch (_0xe) {}
    }

    function _0x6b03() {
        if (typeof confetti !== 'function') return;
        try {
            confetti({ particleCount: 75, spread: 70, origin: { y: 0.6 }, colors: ['#f59e0b', '#10b981', '#fbbf24', '#ffffff', '#ea580c'] });
            setTimeout(() => {
                confetti({ particleCount: 45, angle: 60, spread: 55, origin: { x: 0, y: 0.65 }, colors: ['#f59e0b', '#fbbf24', '#10b981'] });
                confetti({ particleCount: 45, angle: 120, spread: 55, origin: { x: 1, y: 0.65 }, colors: ['#f59e0b', '#fbbf24', '#10b981'] });
            }, 220);
        } catch (_0xe) {}
    }

    function _0x6b04() {
        if (!_0x8a16) {
            const _0xAC = _0x9a1f.AudioContext || _0x9a1f.webkitAudioContext;
            if (_0xAC) _0x8a16 = new _0xAC();
        }
        if (_0x8a16 && _0x8a16.state === 'suspended') _0x8a16.resume();
    }

    function _0x6b05() {
        if (!_0x8a15 || !_0x8a16) return;
        try {
            const _0xn = _0x8a16.currentTime, _0xo = _0x8a16.createOscillator(), _0xg = _0x8a16.createGain();
            _0xo.type = 'triangle';
            _0xo.frequency.setValueAtTime(780, _0xn);
            _0xo.frequency.exponentialRampToValueAtTime(190, _0xn + 0.032);
            _0xg.gain.setValueAtTime(0.11, _0xn);
            _0xg.gain.exponentialRampToValueAtTime(0.001, _0xn + 0.032);
            _0xo.connect(_0xg);
            _0xg.connect(_0x8a16.destination);
            _0xo.start(_0xn);
            _0xo.stop(_0xn + 0.035);
        } catch (_0xe) {}
    }

    function _0x6b06() {
        if (!_0x8a15 || !_0x8a16) return;
        try {
            [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((_0xf, _0xi) => {
                const _0xs = _0x8a16.currentTime + _0xi * 0.085, _0xo = _0x8a16.createOscillator(), _0xg = _0x8a16.createGain();
                _0xo.type = 'triangle';
                _0xo.frequency.setValueAtTime(_0xf, _0xs);
                _0xg.gain.setValueAtTime(0.14, _0xs);
                _0xg.gain.exponentialRampToValueAtTime(0.001, _0xs + 0.38);
                _0xo.connect(_0xg);
                _0xg.connect(_0x8a16.destination);
                _0xo.start(_0xs);
                _0xo.stop(_0xs + 0.4);
            });
        } catch (_0xe) {}
    }

    function _0x6b07() {
        _0x8a15 = !_0x8a15;
        _0x6b02('selection');
        const _0xon = _0x4c2b.getElementById('soundOnIcon'), _0xoff = _0x4c2b.getElementById('soundOffIcon');
        if (_0x8a15) {
            _0x6b04();
            _0xon.classList.remove('hidden');
            _0xoff.classList.add('hidden');
            _0x6b26('🔊 Звук включен');
        } else {
            _0xon.classList.add('hidden');
            _0xoff.classList.remove('hidden');
            _0x6b26('🔇 Звук выключен');
        }
    }

    function _0x6b08(_0xit) {
        const _0xst = _0x3e9b[_0xit.rarityKey] || _0x3e9b.rare;
        if (_0xit.type === 'plate') {
            return `<div class="w-[132px] h-[126px] shrink-0 rounded-2xl bg-gradient-to-b ${_0xst.bg} border ${_0xst.border} p-2.5 flex flex-col items-center justify-between shadow-md"><span class="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${_0xst.badge}">${_0xst.name}</span><div class="ru-plate my-auto"><div class="ru-plate-main">${_0xit.code}</div><div class="ru-plate-region"><span>${_0xit.region}</span><div class="ru-flag"></div></div></div><span class="text-[10px] font-bold text-emerald-400 truncate max-w-full">${_0xit.valueText}</span></div>`;
        } else if (_0xit.type === 'car') {
            return `<div class="w-[132px] h-[126px] shrink-0 rounded-2xl bg-gradient-to-b ${_0xst.bg} border ${_0xst.border} p-2.5 flex flex-col items-center justify-between shadow-md"><span class="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${_0xst.badge}">${_0xst.name}</span><div class="my-auto flex flex-col items-center text-center"><span class="text-2xl">${_0xit.icon || '🏎️'}</span><span class="text-[11px] font-black text-white leading-tight line-clamp-1">${_0xit.name}</span></div><span class="text-[9px] font-bold text-emerald-400 truncate max-w-full">${_0xit.statusText}</span></div>`;
        } else {
            return `<div class="w-[132px] h-[126px] shrink-0 rounded-2xl bg-gradient-to-b ${_0xst.bg} border ${_0xst.border} p-2.5 flex flex-col items-center justify-between shadow-md"><span class="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${_0xst.badge}">${_0xst.name}</span><div class="my-auto flex flex-col items-center text-center"><span class="text-2xl">${_0xit.icon || '🪙'}</span><span class="text-xs font-black text-amber-400 tracking-tight line-clamp-1">${_0xit.amount}</span></div><span class="text-[10px] font-semibold text-gray-300 truncate max-w-full">${_0xit.statusText}</span></div>`;
        }
    }

    function _0x6b09() {
        const _0xtr = _0x4c2b.getElementById('rouletteTrack');
        if (!_0xtr) return;
        const _0xpl = _0x7c12[_0x8a12];
        _0x8a21 = [];
        for (let _0xi = 0; _0xi < _0x44a1; _0xi++) {
            _0x8a21.push(_0xpl[Math.floor(Math.random() * _0xpl.length)]);
        }
        _0xtr.style.transition = 'none';
        _0xtr.style.transform = 'translateX(0px)';
        _0xtr.innerHTML = _0x8a21.map(_0xit => _0x6b08(_0xit)).join('');
    }

    function _0x6b0a() {
        const _0xgr = _0x4c2b.getElementById('prizePoolGrid');
        if (!_0xgr) return;
        const _0xpl = _0x7c12[_0x8a12];
        _0xgr.innerHTML = _0xpl.map(_0xit => {
            const _0xst = _0x3e9b[_0xit.rarityKey] || _0x3e9b.rare;
            if (_0xit.type === 'plate') {
                return `<div class="rounded-2xl bg-gradient-to-b ${_0xst.bg} border ${_0xst.border} p-3 flex flex-col items-center justify-between gap-2"><span class="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${_0xst.badge}">${_0xst.name}</span><div class="ru-plate"><div class="ru-plate-main">${_0xit.code}</div><div class="ru-plate-region"><span>${_0xit.region}</span><div class="ru-flag"></div></div></div><span class="text-[11px] font-bold text-emerald-400">${_0xit.valueText}</span></div>`;
            } else if (_0xit.type === 'car') {
                return `<div class="rounded-2xl bg-gradient-to-b ${_0xst.bg} border ${_0xst.border} p-3 flex flex-col items-center justify-between gap-1.5 text-center"><span class="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${_0xst.badge}">${_0xst.name}</span><div class="text-2xl my-0.5">${_0xit.icon || '🏎️'}</div><div class="text-xs font-black text-white">${_0xit.name}</div><span class="text-[10px] font-bold text-emerald-400">${_0xit.statusText}</span></div>`;
            } else {
                return `<div class="rounded-2xl bg-gradient-to-b ${_0xst.bg} border ${_0xst.border} p-3 flex flex-col items-center justify-between gap-1.5 text-center"><span class="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${_0xst.badge}">${_0xst.name}</span><div class="text-2xl my-0.5">${_0xit.icon || '🪙'}</div><div class="text-xs font-black text-amber-400">${_0xit.amount}</div><span class="text-[10px] text-gray-400">${_0xit.statusText}</span></div>`;
            }
        }).join('');
    }

    function _0x6b0b(_0xtb) {
        if (_0x8a14 || _0x8a12 === _0xtb) return;
        _0x6b02('selection');
        _0x8a12 = _0xtb;
        const _0xtP = _0x4c2b.getElementById('tabPlates'),
              _0xtG = _0x4c2b.getElementById('tabGold'),
              _0xti = _0x4c2b.getElementById('rouletteTitle'),
              _0xsu = _0x4c2b.getElementById('rouletteSubtitle');

        if (_0xtb === 'plates') {
            _0xtP.className = 'py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-lg shadow-orange-600/25';
            _0xtG.className = 'py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 text-gray-400 hover:text-white';
            _0xti.textContent = 'Рулетка госномеров';
            _0xsu.textContent = 'Выбей блатной номер и сразу выведи на аккаунт';
        } else {
            _0xtG.className = 'py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-lg shadow-amber-500/25';
            _0xtP.className = 'py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 text-gray-400 hover:text-white';
            _0xti.textContent = 'Рулетка Голды Standoff 2';
            _0xsu.textContent = 'Выбей до 5000 G и моментально забери по ID';
        }
        _0x6b09();
        _0x6b0a();
    }

    function _0x6b0c() {
        try {
            localStorage.setItem(_0x5f31(7), JSON.stringify(_0x8a17));
            localStorage.setItem(_0x5f31(8), String(_0x8a18));
            localStorage.setItem(_0x5f31(9), String(_0x8a19));
            localStorage.setItem(_0x5f31(10), String(_0x8a1a));
            localStorage.setItem(_0x5f31(11), String(_0x8a1b));
            localStorage.setItem(_0x5f31(12), JSON.stringify(_0x8a1c));
            localStorage.setItem(_0x5f31(13), JSON.stringify(_0x8a1d));
        } catch (_0xe) {}
    }

    function _0x6b0d() {
        const _0xsl = _0x4c2b.getElementById('spinsLeftCount'),
              _0xsb = _0x4c2b.getElementById('spinBtnText'),
              _0xdb = _0x4c2b.getElementById('dailyBonusBtn'),
              _0xdt = _0x4c2b.getElementById('dailyBonusText');
        if (_0xsl) _0xsl.textContent = _0x8a18;
        if (!_0x8a14 && _0xsb) {
            _0xsb.textContent = _0x8a18 > 0 ? `Крутить бесплатно (${_0x8a18})` : '👥 +2 спина за друга';
        }
        if (_0x8a1e && _0xdb && _0xdt) {
            _0xdt.textContent = 'Получено ✓';
            _0xdb.classList.add('opacity-50');
        }
    }

    function _0x6b0e() {
        _0x6b02('impact', 'light');
        if (_0x8a1e) {
            _0x6b26('Ежедневный бонус уже получен! Загляни в Задания');
            return;
        }
        _0x8a1e = true;
        _0x8a18 += 1;
        try { localStorage.setItem(_0x5f31(14), new Date().toDateString()); } catch (_0xe) {}
        _0x6b0c();
        _0x6b02('notification', 'success');
        _0x6b0d();
        _0x6b26('🎁 Ежедневный бонус: +1 бесплатный спин начислен!');
    }

    function _0x6b0f() {
        _0x6b02('impact', 'medium');
        const _0xbu = _0x5f31(1);
        const _0xtx = _0x5f31(2);
        const _0xfl = `${_0x5f31(3)}${encodeURIComponent(_0x5f31(4) + _0xbu + _0x5f31(5))}${_0x5f31(6)}${encodeURIComponent(_0xtx)}`;

        if (_0x8a24 && typeof _0x8a24.openTelegramLink === 'function') {
            _0x8a24.openTelegramLink(_0xfl);
        } else {
            _0x9a1f.open(_0xfl, '_blank');
        }

        setTimeout(() => {
            _0x8a18 += 2;
            _0x8a1b += 1;
            _0x6b0c();
            _0x6b0d();
            _0x6b19();
            _0x6b26('🎉 +2 бонусных спина за друга начислены!');
        }, 1200);
    }

    function _0x6b10() {
        if (_0x8a14) return;
        if (_0x8a18 <= 0) {
            _0x6b0f();
            return;
        }
        _0x6b04();
        _0x6b02('impact', 'medium');
        _0x8a14 = true;
        _0x8a20 = false;

        _0x8a18 -= 1;
        _0x8a19 += 1;
        _0x8a1a += 1;
        if (_0x8a1c) _0x8a1c.points = (_0x8a1c.points || 300) + 50;
        _0x6b0c();
        _0x6b0d();

        const _0xsb = _0x4c2b.getElementById('spinButton'),
              _0xst = _0x4c2b.getElementById('spinBtnText'),
              _0xsi = _0x4c2b.getElementById('spinBtnIcon');

        _0xsb.disabled = true;
        _0xst.textContent = 'Крутим барабан...';
        _0xsi.classList.add('animate-spin');

        _0x6b09();

        const _0xpl = _0x7c12[_0x8a12],
              _0xcm = _0xpl.filter(_0xi => _0xi.rarityKey === 'common'),
              _0xrr = _0xpl.filter(_0xi => _0xi.rarityKey === 'rare'),
              _0xep = _0xpl.filter(_0xi => _0xi.rarityKey === 'epic'),
              _0xlg = _0xpl.filter(_0xi => _0xi.rarityKey === 'legendary'),
              _0xht = [..._0xep, ..._0xlg];

        let _0xwn;
        if (_0x8a1a === 1 && _0xrr.length > 0) {
            _0xwn = _0xrr[Math.floor(Math.random() * _0xrr.length)];
        } else if (_0x8a1a === 2 && _0xht.length > 0) {
            const _0xtp = Math.random() < 0.65 && _0xlg.length > 0 ? _0xlg : _0xht;
            _0xwn = _0xtp[Math.floor(Math.random() * _0xtp.length)];
        } else {
            const _0xrl = Math.random() * 100;
            if (_0xrl < 52 && _0xcm.length > 0) _0xwn = _0xcm[Math.floor(Math.random() * _0xcm.length)];
            else if (_0xrl < 82 && _0xrr.length > 0) _0xwn = _0xrr[Math.floor(Math.random() * _0xrr.length)];
            else if (_0xrl < 95 && _0xep.length > 0) _0xwn = _0xep[Math.floor(Math.random() * _0xep.length)];
            else if (_0xlg.length > 0) _0xwn = _0xlg[Math.floor(Math.random() * _0xlg.length)];
            else _0xwn = _0xpl[Math.floor(Math.random() * _0xpl.length)];
        }

        _0x8a1f = _0xwn;
        _0x8a21[_0x44a2] = _0xwn;

        const _0xtr = _0x4c2b.getElementById('rouletteTrack');
        _0xtr.innerHTML = _0x8a21.map(_0xit => _0x6b08(_0xit)).join('');

        const _0xvp = _0xtr.parentElement,
              _0xvc = _0xvp.clientWidth / 2,
              _0xfw = _0x44a3 + _0x44a4,
              _0xwc = 16 + (_0x44a2 * _0xfw) + (_0x44a3 / 2),
              _0xjt = (Math.random() - 0.5) * 36,
              _0xtx = -(_0xwc - _0xvc + _0xjt);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                _0xtr.style.transition = 'transform 4.4s cubic-bezier(0.12, 0.8, 0.18, 1)';
                _0xtr.style.transform = `translateX(${_0xtx}px)`;
            });
        });

        let _0xlt = 0;
        const _0xss = performance.now(), _0xsd = 4400;

        function _0xtw(_0xnw) {
            const _0xel = _0xnw - _0xss;
            if (_0xel < _0xsd && _0x8a14) {
                const _0xpr = _0xel / _0xsd,
                      _0xea = 1 - Math.pow(1 - _0xpr, 3.5),
                      _0xcx = Math.abs(_0xtx * _0xea),
                      _0xci = Math.floor(_0xcx / _0xfw);
                if (_0xci > _0xlt) {
                    _0xlt = _0xci;
                    _0x6b05();
                    _0x6b02('impact', 'medium');
                }
                requestAnimationFrame(_0xtw);
            }
        }
        requestAnimationFrame(_0xtw);

        setTimeout(() => { _0x6b11(); }, _0xsd + 100);
    }

    function _0x6b11() {
        const _0xsb = _0x4c2b.getElementById('spinButton'),
              _0xsi = _0x4c2b.getElementById('spinBtnIcon');
        _0xsi.classList.remove('animate-spin');
        _0xsb.disabled = false;
        _0x8a14 = false;
        _0x6b0d();

        _0x8a17.unshift({
            ..._0x8a1f,
            uid: 'item_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
            claimedAt: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
        });
        _0x6b0c();
        _0x6b25();

        _0x6b06();
        _0x6b02('notification', 'success');
        _0x6b03();
        _0x6b1b(_0x8a1f, 'Поздравляем! Вы выбили:');
    }

    function _0x6b13(_0xfk) {
        _0x6b02('selection');
        _0x8a13 = _0xfk;
        ['all', 'legendary', 'epic', 'rare', 'common'].forEach(_0xk => {
            const _0xbt = _0x4c2b.getElementById('invFilter-' + _0xk);
            if (!_0xbt) return;
            _0xbt.className = _0xk === _0xfk
                ? 'px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase bg-amber-500 text-black shrink-0 transition'
                : 'px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase bg-white/5 text-gray-300 border border-white/10 shrink-0 transition';
        });
        _0x6b14();
    }

    function _0x6b14() {
        const _0xto = _0x4c2b.getElementById('fullInvTotalCount'),
              _0xgr = _0x4c2b.getElementById('fullInventoryGrid'),
              _0xem = _0x4c2b.getElementById('fullInventoryEmpty'),
              _0xac = _0x4c2b.getElementById('fullInventoryActions');

        if (_0xto) _0xto.textContent = _0x8a17.length;
        if (!_0xgr || !_0xem || !_0xac) return;

        const _0xfl = _0x8a13 === 'all' ? _0x8a17 : _0x8a17.filter(_0xi => _0xi.rarityKey === _0x8a13);
        if (_0xfl.length === 0) {
            _0xgr.innerHTML = '';
            _0xem.classList.remove('hidden');
            _0xac.classList.toggle('hidden', _0x8a17.length === 0);
            return;
        }
        _0xem.classList.add('hidden');
        _0xac.classList.remove('hidden');

        _0xgr.innerHTML = _0xfl.map(_0xit => {
            const _0xst = _0x3e9b[_0xit.rarityKey] || _0x3e9b.rare;
            let _0xvi = '', _0xsu = '';
            if (_0xit.type === 'plate') {
                _0xvi = `<div class="ru-plate my-2"><div class="ru-plate-main">${_0xit.code}</div><div class="ru-plate-region"><span>${_0xit.region}</span><div class="ru-flag"></div></div></div>`;
                _0xsu = _0xit.valueText;
            } else if (_0xit.type === 'car') {
                _0xvi = `<div class="my-1.5 flex flex-col items-center text-center"><span class="text-2xl">${_0xit.icon || '🏎️'}</span><span class="text-xs font-black text-white">${_0xit.name}</span></div>`;
                _0xsu = _0xit.statusText;
            } else {
                _0xvi = `<div class="my-1.5 flex flex-col items-center text-center"><span class="text-2xl">${_0xit.icon || '🪙'}</span><span class="text-xs font-black text-amber-400">${_0xit.amount}</span></div>`;
                _0xsu = _0xit.statusText;
            }
            return `<div class="rounded-2xl bg-gradient-to-b ${_0xst.bg} border ${_0xst.border} p-3 flex flex-col items-center justify-between shadow-md"><div class="w-full flex items-center justify-between"><span class="text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${_0xst.badge}">${_0xst.name}</span><span class="text-[9px] text-gray-400">${_0xit.claimedAt || 'сейчас'}</span></div>${_0xvi}<div class="text-[10px] font-bold text-emerald-400 mb-2 truncate max-w-full">${_0xsu}</div><button onclick="redirectToOffer()" class="w-full py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-[10px] font-extrabold uppercase transition">🚀 Вывести на аккаунт</button></div>`;
        }).join('');
    }

    function _0x6b15() {
        const _0xab = _0x4c2b.getElementById('userClanActiveBox'),
              _0xjb = _0x4c2b.getElementById('userClanJoinBox'),
              _0xnd = _0x4c2b.getElementById('currentClanNameDisplay'),
              _0xpd = _0x4c2b.getElementById('userClanPtsDisplay'),
              _0xhc = _0x4c2b.getElementById('headerClanBadge'),
              _0xbd = _0x4c2b.getElementById('clanLeaderboardList');

        if (_0x8a1c) {
            if (_0xab) _0xab.classList.remove('hidden');
            if (_0xjb) _0xjb.classList.add('hidden');
            if (_0xnd) _0xnd.textContent = _0x8a1c.name;
            if (_0xpd) _0xpd.textContent = _0x8a1c.points || 350;
            if (_0xhc) _0xhc.innerHTML = `Фама: <b class="text-amber-400">${_0x8a1c.name}</b>`;
        } else {
            if (_0xab) _0xab.classList.add('hidden');
            if (_0xjb) _0xjb.classList.remove('hidden');
            if (_0xhc) _0xhc.textContent = 'Официальная раздача призов';
        }

        if (_0xbd) {
            _0xbd.innerHTML = _0x8a26.map((_0xcl, _0xix) => {
                const _0xiu = _0x8a1c && _0x8a1c.name.toUpperCase() === _0xcl.name.toUpperCase();
                const _0xtp = _0xiu ? _0xcl.points + (_0x8a1c.points || 350) : _0xcl.points;
                const _0xmd = _0xix === 0 ? '🥇' : (_0xix === 1 ? '🥈' : (_0xix === 2 ? '🥉' : `#${_0xix + 1}`));
                return `<div class="flex items-center justify-between p-2.5 rounded-xl border ${_0xiu ? 'bg-blue-500/15 border-blue-400/50' : 'bg-[#0e1017] border-white/10'}"><div class="flex items-center gap-2.5 min-w-0"><div class="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center font-black text-xs shrink-0">${_0xmd}</div><div class="min-w-0"><div class="text-xs font-black text-white truncate">${_0xcl.tag} ${_0xcl.name}</div><div class="text-[10px] text-gray-400">Состав: ${_0xcl.members + (_0xiu ? 1 : 0)} • Приз: <b class="text-emerald-400">${_0xcl.reward}</b></div></div></div><div class="text-right shrink-0"><div class="text-xs font-extrabold text-amber-400">${_0xtp.toLocaleString('ru-RU')} pts</div>${!_0x8a1c ? `<button onclick="joinPresetClan('${_0xcl.name}')" class="mt-0.5 px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[9px] font-bold hover:bg-blue-500/30">Влететь</button>` : ''}</div></div>`;
            }).join('');
        }
    }

    function _0x6b16(_0xcn) {
        _0x6b02('notification', 'success');
        const _0xfj = !localStorage.getItem(_0x5f31(15));
        _0x8a1c = { name: _0xcn, points: 350 };
        if (_0xfj) {
            _0x8a18 += 1;
            try { localStorage.setItem(_0x5f31(15), '1'); } catch (_0xe) {}
            _0x6b26(`👑 Влетел в ${_0xcn}! +1 спин закинул на баланс`);
        } else {
            _0x6b26(`👑 Ты в составе фамы ${_0xcn}!`);
        }
        _0x6b0c();
        _0x6b0d();
        _0x6b15();
        _0x6b19();
    }

    function _0x6b17() {
        const _0xin = _0x4c2b.getElementById('clanInputName');
        const _0xvl = _0xin ? _0xin.value.trim() : '';
        if (_0xvl.length < 3) {
            _0x6b26('Введи название фамы (от 3 символов)');
            return;
        }
        _0x6b16(_0xvl.toUpperCase());
        if (_0xin) _0xin.value = '';
    }

    function _0x6b18() {
        _0x6b02('selection');
        _0x8a1c = null;
        _0x6b0c();
        _0x6b15();
        _0x6b26('Ты ливнул из фамы');
    }

    function _0x6b18_defs() {
        const _0xhb = _0x8a17.some(_0xi => _0xi.game === 'br' || _0xi.type === 'plate' || _0xi.type === 'car') &&
                      _0x8a17.some(_0xi => _0xi.game === 'so2' || _0xi.type === 'gold' || _0xi.type === 'skin');
        return [
            { id: 'q_spin3', title: 'Сделай 3 прокрута в рулетке', progress: Math.min(_0x8a1a, 3), target: 3, rewardText: '+1 Спин', rewardType: 'spins', rewardAmount: 1 },
            { id: 'q_clan', title: 'Влететь с пацанами в любую Фаму', progress: _0x8a1c ? 1 : 0, target: 1, rewardText: '+1 Спин', rewardType: 'spins', rewardAmount: 1 },
            { id: 'q_both_modes', title: 'Залутать дроп и в BR, и в Standoff 2', progress: _0xhb ? 1 : 0, target: 1, rewardText: '+2 Спина', rewardType: 'spins', rewardAmount: 2 },
            { id: 'q_share', title: 'Позвать братву по ссылке', progress: Math.min(_0x8a1b, 1), target: 1, rewardText: '+2 Спина', rewardType: 'spins', rewardAmount: 2 },
            { id: 'q_collect5', title: 'Собрать 5 любых вещичек в Инвентаре', progress: Math.min(_0x8a17.length, 5), target: 5, rewardText: '🎁 Эпик Дроп', rewardType: 'epic_item', rewardAmount: 1 }
        ];
    }

    function _0x6b19() {
        const _0xcn = _0x4c2b.getElementById('questsListContainer'),
              _0xlv = _0x4c2b.getElementById('bpLevelText'),
              _0xbr = _0x4c2b.getElementById('bpProgressBar'),
              _0xct = _0x4c2b.getElementById('bpProgressCounter'),
              _0xnd = _0x4c2b.getElementById('navQuestsDot');

        const _0xqs = _0x6b18_defs();
        let _0xcc = 0, _0xur = false;

        _0xqs.forEach(_0xq => {
            if (_0x8a1d[_0xq.id]) _0xcc++;
            else if (_0xq.progress >= _0xq.target) _0xur = true;
        });

        if (_0xlv) _0xlv.textContent = 1 + _0xcc;
        if (_0xbr) _0xbr.style.width = `${Math.max(12, (_0xcc / _0xqs.length) * 100)}%`;
        if (_0xct) _0xct.textContent = `${_0xcc} / ${_0xqs.length} выполнено`;
        if (_0xnd) _0xnd.classList.toggle('hidden', !_0xur);
        if (!_0xcn) return;

        _0xcn.innerHTML = _0xqs.map(_0xq => {
            const _0xic = !!_0x8a1d[_0xq.id],
                  _0xir = _0xq.progress >= _0xq.target && !_0xic,
                  _0xpc = Math.min(100, Math.round((_0xq.progress / _0xq.target) * 100));

            let _0xab = '';
            if (_0xic) {
                _0xab = `<span class="px-2.5 py-1.5 rounded-xl bg-white/5 text-emerald-400 text-[10px] font-extrabold shrink-0">Залутано ✓</span>`;
            } else if (_0xir) {
                _0xab = `<button onclick="claimQuestReward('${_0xq.id}')" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[10px] font-black uppercase shadow-md shadow-emerald-500/20 animate-pulse shrink-0">Забрать ${_0xq.rewardText}</button>`;
            } else {
                _0xab = `<span class="px-2.5 py-1 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-extrabold shrink-0">${_0xq.rewardText}</span>`;
            }

            return `<div class="bg-[#141722] border ${_0xir ? 'border-emerald-500/50' : 'border-white/10'} rounded-2xl p-3 flex flex-col gap-2"><div class="flex items-center justify-between gap-2"><div class="text-xs font-extrabold text-white">${_0xq.title}</div>${_0xab}</div><div class="flex items-center gap-2"><div class="flex-1 h-1.5 bg-black/50 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full transition-all" style="width: ${_0xpc}%"></div></div><span class="text-[10px] font-bold text-gray-400">${_0xq.progress}/${_0xq.target}</span></div></div>`;
        }).join('');
    }

    function _0x6b1a(_0xqi) {
        const _0xqs = _0x6b18_defs(),
              _0xq = _0xqs.find(_0xit => _0xit.id === _0xqi);
        if (!_0xq || _0x8a1d[_0xqi] || _0xq.progress < _0xq.target) return;

        _0x8a1d[_0xqi] = true;
        _0x6b04();
        _0x6b06();
        _0x6b02('notification', 'success');
        _0x6b03();

        if (_0xq.rewardType === 'spins') {
            _0x8a18 += _0xq.rewardAmount;
            _0x6b26(`🎉 Награда залутана: +${_0xq.rewardAmount} спин!`);
        } else {
            const _0xep = [..._0x7c12.plates, ..._0x7c12.gold].filter(_0xp => _0xp.rarityKey === 'epic' || _0xp.rarityKey === 'legendary');
            const _0xbi = {
                ..._0xep[Math.floor(Math.random() * _0xep.length)],
                uid: 'quest_' + Date.now(),
                claimedAt: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
            };
            _0x8a17.unshift(_0xbi);
            _0x6b26('🎁 Эпический шмот упал в Инвентарь!');
        }
        _0x6b0c();
        _0x6b0d();
        _0x6b25();
        _0x6b19();
    }

    function _0x6b1b(_0xpr, _0xct) {
        const _0xmd = _0x4c2b.getElementById('resultModal'),
              _0xcd = _0x4c2b.getElementById('modalCard'),
              _0xti = _0x4c2b.getElementById('modalTitle'),
              _0xsh = _0x4c2b.getElementById('modalPrizeShowcase'),
              _0xcb = _0x4c2b.getElementById('claimSuccessBanner'),
              _0xbt = _0x4c2b.getElementById('claimPrizeBtn');

        _0x8a23 = 299;
        if (_0xti) _0xti.textContent = _0xct || 'Поздравляем! Вы выбили:';
        _0xcb.classList.add('hidden');
        _0xbt.classList.remove('hidden');

        const _0xst = _0x3e9b[_0xpr.rarityKey] || _0x3e9b.rare;
        if (_0xpr.type === 'plate') {
            _0xsh.innerHTML = `<span class="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${_0xst.badge} mb-3">${_0xst.name} госномер</span><div class="ru-plate scale-125 my-3"><div class="ru-plate-main">${_0xpr.code}</div><div class="ru-plate-region"><span>${_0xpr.region}</span><div class="ru-flag"></div></div></div><div class="text-sm font-black text-emerald-400 mt-2">${_0xpr.valueText}</div>`;
        } else if (_0xpr.type === 'car') {
            _0xsh.innerHTML = `<span class="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${_0xst.badge} mb-2">${_0xst.name} автомобиль</span><div class="text-5xl my-2">${_0xpr.icon || '🏎️'}</div><div class="text-xl font-black text-white">${_0xpr.name}</div><div class="text-xs font-bold text-emerald-400 mt-1">${_0xpr.statusText}</div>`;
        } else {
            _0xsh.innerHTML = `<span class="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${_0xst.badge} mb-2">${_0xst.name} дроп SO2</span><div class="text-5xl my-2">${_0xpr.icon || '🪙'}</div><div class="text-2xl font-black text-amber-400">${_0xpr.amount}</div><div class="text-xs text-gray-400 mt-1">${_0xpr.statusText}</div>`;
        }

        _0xmd.classList.remove('hidden');
        _0xmd.classList.add('flex');
        requestAnimationFrame(() => {
            _0xmd.classList.remove('opacity-0');
            _0xcd.classList.remove('scale-90');
            _0xcd.classList.add('scale-100');
        });
    }

    function _0x6b1c() {
        _0x6b02('selection');
        const _0xmd = _0x4c2b.getElementById('resultModal'),
              _0xcd = _0x4c2b.getElementById('modalCard');
        _0xmd.classList.add('opacity-0');
        _0xcd.classList.remove('scale-100');
        _0xcd.classList.add('scale-90');
        setTimeout(() => {
            _0xmd.classList.remove('flex');
            _0xmd.classList.add('hidden');
        }, 250);
    }

    function _0x6b1d() {
        _0x6b1c();
        setTimeout(() => {
            if (_0x8a11 !== 'roulette') _0x6b01('roulette');
            _0x6b10();
        }, 280);
    }

    function _0x6b1e() {
        if (_0x8a22) return;
        _0x8a22 = true;
        _0x6b02('notification', 'success');

        const _0xov = _0x4c2b.getElementById('reservationOverlay'),
              _0xst = _0x4c2b.getElementById('reservationStatus'),
              _0xbr = _0x4c2b.getElementById('reservationBar'),
              _0xpr = _0x4c2b.getElementById('reservationPromoCode');

        const _0xig = _0x8a12 === 'gold' || (_0x8a1f && _0x8a1f.type === 'gold'),
              _0xsn = _0xig ? 'Standoff 2' : 'Black Russia',
              _0xrc = 'PROMO-' + Math.random().toString(36).substring(2, 7).toUpperCase();

        if (_0xov && _0xst && _0xbr) {
            _0xov.classList.remove('hidden');
            _0xov.classList.add('flex');
            _0xbr.style.width = '20%';
            _0xst.textContent = `Связь с сервером ${_0xsn}...`;
            if (_0xpr) _0xpr.textContent = 'Генерация сессии...';

            setTimeout(() => {
                _0x6b02('impact', 'light');
                _0xbr.style.width = '65%';
                _0xst.textContent = 'Генерация персонального промокода...';
                if (_0xpr) _0xpr.textContent = `Код брони: #${_0xrc}`;
            }, 500);

            setTimeout(() => {
                _0x6b02('notification', 'success');
                _0xbr.style.width = '100%';
                _0xst.textContent = 'Приз закреплен за вашим ID! Переход...';
            }, 1050);

            setTimeout(() => {
                _0x9a1f.location.href = _0x10a4;
                setTimeout(() => { _0x8a22 = false; }, 1000);
            }, 1550);
        } else {
            _0x9a1f.location.href = _0x10a4;
        }
    }

    function _0x6b1f() {
        _0x8a20 = true;
        const _0xcb = _0x4c2b.getElementById('claimSuccessBanner'),
              _0xbt = _0x4c2b.getElementById('claimPrizeBtn');
        if (_0xcb) _0xcb.classList.remove('hidden');
        if (_0xbt) _0xbt.classList.add('hidden');
        _0x6b1e();
    }

    function _0x6b25() {
        const _0xbd = _0x4c2b.getElementById('inventoryCountBadge'),
              _0xnb = _0x4c2b.getElementById('navInvBadge'),
              _0xsc = _0x4c2b.getElementById('inventorySection'),
              _0xls = _0x4c2b.getElementById('inventoryList');

        if (_0xbd) _0xbd.textContent = _0x8a17.length;
        if (_0xnb) {
            _0xnb.textContent = _0x8a17.length;
            _0xnb.classList.toggle('hidden', _0x8a17.length === 0);
        }
        _0x6b19();
        if (!_0xsc || !_0xls) return;
        if (_0x8a17.length === 0) {
            _0xsc.classList.add('hidden');
            return;
        }
        _0xsc.classList.remove('hidden');
        _0xls.innerHTML = _0x8a17.map(_0xit => {
            if (_0xit.type === 'plate') {
                return `<div onclick="redirectToOffer()" class="cursor-pointer flex items-center justify-between bg-[#0e1017] hover:bg-white/5 border border-white/10 rounded-xl px-3 py-2 transition"><div class="flex items-center gap-2.5"><span class="text-sm">🚘</span><div><div class="text-xs font-extrabold text-white">${_0xit.code} ${_0xit.region}</div><div class="text-[10px] text-emerald-400 font-semibold">${_0xit.valueText}</div></div></div><span class="text-[10px] font-extrabold text-amber-400 bg-amber-500/15 border border-amber-500/30 px-2 py-1 rounded-lg">Забрать →</span></div>`;
            } else if (_0xit.type === 'car') {
                return `<div onclick="redirectToOffer()" class="cursor-pointer flex items-center justify-between bg-[#0e1017] hover:bg-white/5 border border-white/10 rounded-xl px-3 py-2 transition"><div class="flex items-center gap-2.5"><span class="text-sm">${_0xit.icon || '🏎️'}</span><div><div class="text-xs font-extrabold text-white">${_0xit.name}</div><div class="text-[10px] text-emerald-400 font-semibold">${_0xit.statusText}</div></div></div><span class="text-[10px] font-extrabold text-amber-400 bg-amber-500/15 border border-amber-500/30 px-2 py-1 rounded-lg">Забрать →</span></div>`;
            } else {
                return `<div onclick="redirectToOffer()" class="cursor-pointer flex items-center justify-between bg-[#0e1017] hover:bg-white/5 border border-white/10 rounded-xl px-3 py-2 transition"><div class="flex items-center gap-2.5"><span class="text-sm">${_0xit.icon || '🪙'}</span><div><div class="text-xs font-extrabold text-amber-400">${_0xit.amount}</div><div class="text-[10px] text-gray-400">${_0xit.statusText}</div></div></div><span class="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-1 rounded-lg">Забрать →</span></div>`;
            }
        }).join('');
    }

    let _0xtt = null;
    function _0x6b26(_0xtx) {
        const _0xcn = _0x4c2b.getElementById('toastContainer'),
              _0xte = _0x4c2b.getElementById('toastText');
        if (!_0xcn || !_0xte) return;
        _0xte.textContent = _0xtx;
        _0xcn.classList.remove('opacity-0', '-translate-y-2');
        _0xcn.classList.add('opacity-100', 'translate-y-0');
        clearTimeout(_0xtt);
        _0xtt = setTimeout(() => {
            _0xcn.classList.remove('opacity-100', 'translate-y-0');
            _0xcn.classList.add('opacity-0', '-translate-y-2');
        }, 2600);
    }

    function _0x6b27() {
        const _0xfe = _0x4c2b.getElementById('liveFeedItem'),
              _0xoe = _0x4c2b.getElementById('onlineCounter');
        let _0xfi = 0;
        setInterval(() => {
            if (!_0xfe) return;
            _0xfi = (_0xfi + 1) % _0x8a25.length;
            const _0xev = _0x8a25[_0xfi];
            _0xfe.style.opacity = '0';
            setTimeout(() => {
                _0xfe.innerHTML = `Игрок <b class="text-white">${_0xev.user}</b> ${_0xev.action}: <b class="text-amber-400">${_0xev.prize}</b>`;
                _0xfe.style.opacity = '1';
            }, 250);
            if (_0xoe) {
                const _0xbs = 1460 + Math.floor(Math.random() * 35);
                _0xoe.textContent = _0xbs.toLocaleString('ru-RU');
            }
        }, 3500);

        let _0xsl = 899;
        setInterval(() => {
            _0xsl = _0xsl > 0 ? _0xsl - 1 : 899;
            _0x8a23 = _0x8a23 > 0 ? _0x8a23 - 1 : 299;
            const _0xfm = (_0xsc) => `${String(Math.floor(_0xsc / 60)).padStart(2, '0')}:${String(_0xsc % 60).padStart(2, '0')}`;
            const _0xit = _0x4c2b.getElementById('inventoryTimer'),
                  _0xmt = _0x4c2b.getElementById('modalUrgencyTimer');
            if (_0xit) _0xit.textContent = _0xfm(_0xsl);
            if (_0xmt) _0xmt.textContent = _0xfm(_0x8a23);
        }, 1000);
    }

    // Привязка глобальных обработчиков для HTML-кнопок
    _0x9a1f.switchMainView = _0x6b01;
    _0x9a1f.toggleSound = _0x6b07;
    _0x9a1f.switchTab = _0x6b0b;
    _0x9a1f.claimDailyBonus = _0x6b0e;
    _0x9a1f.shareWithFriend = _0x6b0f;
    _0x9a1f.startSpin = _0x6b10;
    _0x9a1f.setInventoryFilter = _0x6b13;
    _0x9a1f.joinPresetClan = _0x6b16;
    _0x9a1f.createOrJoinCustomClan = _0x6b17;
    _0x9a1f.leaveClan = _0x6b18;
    _0x9a1f.claimQuestReward = _0x6b1a;
    _0x9a1f.closeResultModal = _0x6b1c;
    _0x9a1f.spinAgainFromModal = _0x6b1d;
    _0x9a1f.redirectToOffer = _0x6b1e;
    _0x9a1f.claimCurrentPrize = _0x6b1f;

    _0x9a1f.onload = function() {
        if (_0x8a24) {
            try { _0x8a24.ready(); _0x8a24.expand(); } catch (_0xe) {}
        }
        _0x6b09();
        _0x6b0a();
        _0x6b25();
        _0x6b0d();
        _0x6b15();
        _0x6b19();
        _0x6b27();
    };
})(window, document);
