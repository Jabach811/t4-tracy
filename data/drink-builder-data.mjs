const option = (id, label, extra = {}) => ({ id, label, ...extra });

export const builderOptions = {
  bases: [
    option('milk-tea', 'Milk tea', { price: 5.2, liquid: '#D9A56B', milky: true }),
    option('black-tea', 'Black tea', { price: 5.6, liquid: '#8A412F' }),
    option('green-tea', 'Green tea', { price: 5.6, liquid: '#98BC53' }),
    option('royal-tea', 'Royal tea', { price: 5.6, liquid: '#E9A55A' }),
    option('smoothie', 'Smoothie', { price: 6, liquid: '#F3B5BC', blended: true }),
    option('milkshake', 'Milkshake', { price: 6, liquid: '#F6E2C8', milky: true, blended: true }),
    option('coffee', 'Vietnamese coffee', { price: 6, liquid: '#6A3826', milky: true, proper: true }),
    option('special', 'Special base', { price: 5.2, liquid: '#E7C58C', milky: true, note: 'caffeine-free' })
  ],
  flavors: [
    option('none', 'None'),
    option('mango', 'Mango', { liquid: '#F4A329', overlay: 'flavor-mango' }),
    option('strawberry', 'Strawberry', { liquid: '#EC6576', overlay: 'flavor-strawberry' }),
    option('lemon', 'Lemon', { liquid: '#F3CB39', overlay: 'flavor-lemon' }),
    option('guava', 'Guava', { liquid: '#EA8294', overlay: 'flavor-guava' }),
    option('apple', 'Apple', { liquid: '#B8CD64', overlay: 'flavor-apple' }),
    option('lychee', 'Lychee', { liquid: '#E8B6C2', overlay: 'flavor-lychee' }),
    option('honeydew', 'Honeydew', { liquid: '#B6D970', overlay: 'flavor-honeydew' }),
    option('passion-fruit', 'Passion fruit', { liquid: '#F7C73C', overlay: 'flavor-passion-fruit' }),
    option('ginger', 'Ginger', { liquid: '#DAA24D', overlay: 'flavor-ginger' }),
    option('coconut', 'Coconut', { liquid: '#F4DFBF', overlay: 'flavor-coconut' }),
    option('taro', 'Taro', { liquid: '#B59BD6' }),
    option('matcha', 'Matcha', { liquid: '#6E9E3B' }),
    option('thai', 'Thai tea', { liquid: '#E28A3C', proper: true }),
    option('caramel', 'Caramel', { liquid: '#C4833A' }),
    option('chocolate', 'Chocolate', { liquid: '#70402A' }),
    option('winter-melon', 'Winter melon', { liquid: '#C9A66B' }),
    option('rose', 'Rose', { liquid: '#E7A0B6' }),
    option('brown-sugar', 'Brown sugar', { liquid: '#9A5B2E' }),
    option('honey', 'Honey', { liquid: '#E9B54A' }),
    option('peach', 'Peach', { liquid: '#F4A98A' }),
    option('grapefruit', 'Grapefruit', { liquid: '#F08A7A' }),
    option('kumquat', 'Kumquat', { liquid: '#F2B233' }),
    option('oreo', 'Oreo', { liquid: '#8C8C8C', proper: true }),
    option('banana', 'Banana', { liquid: '#F3E39A' }),
    option('avocado', 'Avocado', { liquid: '#A9C96A' }),
    option('peppermint', 'Peppermint', { liquid: '#BFE3D2' }),
    option('pineapple', 'Pineapple', { liquid: '#F5D55A' }),
    option('earl-grey', 'Earl grey', { liquid: '#C8A277', proper: true }),
    option('jasmine', 'Jasmine', { liquid: '#D7C59A' }),
    option('oolong', 'Oolong', { liquid: '#B98A5E' }),
    option('yogurt', 'Yogurt', { liquid: '#F6EEE3' }),
    option('pudding', 'Pudding', { liquid: '#E8B95E' })
  ],
  milks: [
    option('regular', 'Regular', { price: 0 }),
    option('oat', 'Oat', { price: 0.7 }),
    option('almond', 'Almond', { price: 0.7 }),
    option('soy', 'Soy', { price: 0.7 }),
    option('coconut', 'Coconut', { price: 0.7 })
  ],
  sweetness: [
    option('regular', 'Regular'), option('80', '80%'), option('half', 'Half'),
    option('30', '30%'), option('zero', 'Zero')
  ],
  ice: [
    option('regular', 'Regular', { cubes: 3 }), option('80', '80%', { cubes: 2 }),
    option('30', '30%', { cubes: 1 }), option('zero', 'Zero', { cubes: 0 })
  ],
  toppings: [
    option('pearl', 'Pearl', { price: 0.7, overlay: 'topping-pearl', color: '#2B1A14' }),
    option('mini-pearl', 'Mini pearl', { price: 0.7, overlay: null, color: '#3A2418' }),
    option('white-pearl', 'White pearl', { price: 0.7, overlay: null, color: '#F2EBDD' }),
    option('lychee-jelly', 'Lychee jelly', { price: 0.7, overlay: null, color: '#F4E3EA' }),
    option('rainbow-jelly', 'Rainbow jelly', { price: 0.7, overlay: null, color: '#F08A3C' }),
    option('coconut-jelly', 'Coconut jelly', { price: 0.7, overlay: null, color: '#FFF8F0' }),
    option('coffee-jelly', 'Coffee jelly', { price: 0.7, overlay: 'topping-coffee-jelly', color: '#3B2417' }),
    option('grass-jelly', 'Grass jelly', { price: 0.7, overlay: 'topping-grass-jelly', color: '#1E1B1B' }),
    option('egg-pudding', 'Egg pudding', { price: 0.7, overlay: null, color: '#F2C14E' }),
    option('red-bean', 'Red bean', { price: 0.7, overlay: 'topping-red-bean', color: '#6D2B2F' }),
    option('aloe', 'Aloe vera', { price: 0.7, overlay: 'topping-aloe', color: '#D9F0DF' }),
    option('basil-seeds', 'Basil seeds', { price: 0.7, overlay: null, color: '#2F2F2F' }),
    option('honeydew-pop', 'Honeydew pop', { price: 0.7, overlay: null, color: '#BFE38A' }),
    option('mango-pop', 'Mango pop', { price: 0.7, overlay: null, color: '#F7B233' }),
    option('kiwi-pop', 'Kiwi pop', { price: 0.7, overlay: null, color: '#8CC152' }),
    option('strawberry-pop', 'Strawberry pop', { price: 0.7, overlay: null, color: '#E9456A' })
  ],
  finishes: [
    option('iced', 'Iced'), option('hot', 'Hot'), option('blended', 'Blended')
  ],
  addons: [
    option('none', 'None', { price: 0 }),
    option('sea-salt', 'Sea-salt cream', { price: 1, kind: 'cream', color: '#EEF3E6' }),
    option('cream-cheese', 'Cream cheese cream', { price: 1, kind: 'cream', color: '#FFF6E4' }),
    option('coconut-cream', 'Coconut cream', { price: 1, kind: 'cream', color: '#FFFBF4' }),
    option('mango-ice-cream', 'Mango ice cream', { price: 1, kind: 'ice-cream', color: '#F9B63A' }),
    option('vanilla-ice-cream', 'Vanilla ice cream', { price: 1, kind: 'ice-cream', color: '#FBF1D3' }),
    option('strawberry-ice-cream', 'Strawberry ice cream', { price: 1, kind: 'ice-cream', color: '#F28BA0' })
  ]
};

export const defaults = {
  start: 'fresh', base: 'milk-tea', flavor: 'none', milk: 'regular',
  sweetness: 'regular', ice: 'regular', toppings: [], finish: 'iced', addon: 'none'
};

export const findOption = (group, id) => builderOptions[group].find((entry) => entry.id === id);

const pick = (group, id, fallback) => (findOption(group, id) || findOption(group, fallback)).id;

export const milkApplies = (baseId) => Boolean(findOption('bases', baseId)?.milky);

export function normalizeRecipe(recipe = {}) {
  const r = { ...defaults, ...recipe };
  const toppings = [];
  for (const id of Array.isArray(r.toppings) ? r.toppings : []) {
    if (findOption('toppings', id) && !toppings.includes(id) && toppings.length < 3) toppings.push(id);
  }
  const base = pick('bases', r.base, defaults.base);
  const finish = pick('finishes', r.finish, defaults.finish);
  return {
    start: typeof r.start === 'string' ? r.start : 'fresh',
    base,
    flavor: pick('flavors', r.flavor, defaults.flavor),
    milk: milkApplies(base) ? pick('milks', r.milk, defaults.milk) : 'regular',
    sweetness: pick('sweetness', r.sweetness, defaults.sweetness),
    ice: finish === 'hot' ? 'zero' : pick('ice', r.ice, defaults.ice),
    toppings,
    finish,
    addon: pick('addons', r.addon, defaults.addon)
  };
}

export function composeVisual(recipe = {}) {
  const r = normalizeRecipe(recipe);
  const base = findOption('bases', r.base);
  const flavor = findOption('flavors', r.flavor);
  const addon = findOption('addons', r.addon);
  const vessel = r.finish === 'hot' ? 'hot' : (r.finish === 'blended' || base.blended) ? 'blended' : 'iced';
  return {
    vessel,
    liquid: flavor.liquid || base.liquid,
    flavorOverlay: flavor.overlay || null,
    swirl: r.flavor !== 'none' && !flavor.overlay ? flavor.liquid : null,
    toppings: r.toppings.map((id) => {
      const t = findOption('toppings', id);
      return { id, overlay: t.overlay, color: t.color };
    }),
    iceCubes: vessel === 'iced' ? findOption('ice', r.ice).cubes : 0,
    cream: addon.kind === 'cream' ? addon.color : null,
    iceCream: addon.kind === 'ice-cream' ? addon.color : null,
    showSteam: vessel === 'hot'
  };
}

const lower = (o) => o.proper ? o.label : o.label.charAt(0).toLowerCase() + o.label.slice(1);

export function describeRecipe(recipe = {}) {
  const r = normalizeRecipe(recipe);
  const base = findOption('bases', r.base);
  const flavor = findOption('flavors', r.flavor);
  const name = r.flavor === 'none' ? base.label : `${flavor.label} ${lower(base)}`;
  const milk = r.milk === 'regular' ? '' : ` with ${lower(findOption('milks', r.milk))} milk`;
  const sweet = `${lower(findOption('sweetness', r.sweetness))} sweet`;
  const serve = r.finish === 'hot' ? 'hot'
    : r.finish === 'blended' ? 'blended'
    : `${lower(findOption('ice', r.ice))} ice`;
  const toppings = r.toppings.length ? `, ${r.toppings.map((id) => lower(findOption('toppings', id))).join(' + ')}` : '';
  const addon = r.addon === 'none' ? '' : `, ${lower(findOption('addons', r.addon))}`;
  return `${name}${milk}, ${sweet}, ${serve}${toppings}${addon}.`;
}

const round = (n) => Math.round(n * 100) / 100;

export function priceRecipe(recipe = {}) {
  const r = normalizeRecipe(recipe);
  const preset = r.start !== 'fresh' ? builderPresets.find((p) => p.id === r.start) : null;
  const base = findOption('bases', r.base);
  const included = preset ? preset.recipe.toppings : [];
  const drink = preset ? preset.price : base.price;
  const milk = findOption('milks', r.milk).price;
  const toppings = round(r.toppings.filter((id) => !included.includes(id)).reduce((sum, id) => sum + findOption('toppings', id).price, 0));
  const addon = preset && r.addon === preset.recipe.addon ? 0 : findOption('addons', r.addon).price;
  return {
    label: preset ? preset.label : base.label,
    drink, milk, toppings, addon,
    total: round(drink + milk + toppings + addon)
  };
}

export const presetCategories = [
  { id: 'milk-teas', label: 'Milk Teas' },
  { id: 'fruit-teas', label: 'Fruit Teas' },
  { id: 'smoothies', label: 'Smoothies' },
  { id: 'milkshakes', label: 'Milkshakes' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'specials', label: 'Specials' }
];

// id is also the image file name
const preset = (id, label, price, category, recipe) =>
  ({ id, label, price, category, image: id, recipe: { ...defaults, ...recipe, start: id } });
const mt = (flavor, extra = {}) => ({ base: 'milk-tea', flavor, ...extra });
const ft = (base, flavor, extra = {}) => ({ base, flavor, ...extra });
const sm = (flavor, extra = {}) => ({ base: 'smoothie', flavor, finish: 'blended', ...extra });
const ms = (flavor, extra = {}) => ({ base: 'milkshake', flavor, finish: 'blended', ...extra });

export const builderPresets = [
  // Classic milk teas $5.20
  preset('earl-grey-milk-tea', 'Earl Grey Milk Tea', 5.2, 'milk-teas', mt('earl-grey')),
  preset('jasmine-milk-tea', 'Jasmine Milk Tea', 5.2, 'milk-teas', mt('jasmine')),
  preset('roasted-oolong-milk-tea', 'Roasted Oolong Milk Tea', 5.2, 'milk-teas', mt('oolong')),
  preset('thai-milk-tea', 'Thai Milk Tea', 5.2, 'milk-teas', mt('thai')),
  preset('brown-sugar-latte', 'Brown Sugar Latte with Pearl', 5.9, 'milk-teas', mt('brown-sugar', { toppings: ['pearl'] })),
  // Signature milk teas $5.60
  preset('okinawa-milk-tea', 'Okinawa Milk Tea', 5.6, 'milk-teas', mt('brown-sugar')),
  preset('classical-rose-milk-tea', 'Classical Rose Milk Tea', 5.6, 'milk-teas', mt('rose')),
  preset('caramel-milk-tea', 'Caramel Milk Tea', 5.6, 'milk-teas', mt('caramel')),
  preset('winter-melon-milk-tea', 'Winter Melon Milk Tea', 5.6, 'milk-teas', mt('winter-melon')),
  preset('coconut-milk-tea', 'Coconut Milk Tea', 5.6, 'milk-teas', mt('coconut')),
  preset('matcha-fresh-milk', 'Matcha with Fresh Milk', 5.6, 'milk-teas', mt('matcha')),
  preset('ballet-chocolate-milk-tea', 'Ballet Chocolate', 5.6, 'milk-teas', mt('chocolate')),
  preset('peppermint-milk-tea', 'Peppermint Milk Tea', 5.6, 'milk-teas', mt('peppermint')),
  preset('royal-fresh-milk-tea', 'Royal Fresh Milk Tea', 5.6, 'milk-teas', mt('none')),
  preset('honeydew-milk-tea', 'Honeydew Milk Tea', 5.6, 'milk-teas', mt('honeydew')),
  // Special milk teas $5.90
  preset('pearl-milk-tea', 'Pearl Milk Tea', 5.9, 'milk-teas', mt('none', { toppings: ['pearl'] })),
  preset('milk-tea-pearl-coffee-jelly', 'Milk Tea with Pearl / Coffee Jelly', 5.9, 'milk-teas', mt('none', { toppings: ['pearl', 'coffee-jelly'] })),
  preset('french-pudding-milk-tea', 'French Pudding Milk Tea', 5.9, 'milk-teas', mt('pudding', { toppings: ['egg-pudding'] })),
  preset('snow-globe-pearl-milk-tea', 'Snow Globe Milk Tea', 5.9, 'milk-teas', mt('none', { toppings: ['white-pearl'] })),
  preset('red-bean-milk-tea', 'Red Bean Milk Tea', 5.9, 'milk-teas', mt('none', { toppings: ['red-bean'] })),
  preset('grass-jelly-milk-tea', 'Grass Jelly Milk Tea', 5.9, 'milk-teas', mt('none', { toppings: ['grass-jelly'] })),
  preset('oreo-potted-milk-tea', 'Oreo Potted Milk Tea', 5.9, 'milk-teas', mt('oreo')),
  preset('matcha-strawberry-fresh-milk', 'Matcha Strawberry Fresh Milk', 5.9, 'milk-teas', mt('matcha', { toppings: ['strawberry-pop'] })),
  preset('taro-pearl-milk-tea', 'Taro Pearl Milk Tea', 5.9, 'milk-teas', mt('taro', { toppings: ['pearl'] })),
  // Fruit teas $5.60
  preset('lychee-black-tea', 'Lychee Black Tea', 5.6, 'fruit-teas', ft('black-tea', 'lychee')),
  preset('lychee-green-tea', 'Lychee Green Tea', 5.6, 'fruit-teas', ft('green-tea', 'lychee')),
  preset('guava-green-tea', 'Guava Green Tea', 5.6, 'fruit-teas', ft('green-tea', 'guava')),
  preset('guava-royal-tea', 'Guava Royal Tea', 5.6, 'fruit-teas', ft('royal-tea', 'guava')),
  preset('apple-black-tea', 'Apple Black Tea', 5.6, 'fruit-teas', ft('black-tea', 'apple')),
  preset('apple-royal-tea', 'Apple Royal Tea', 5.6, 'fruit-teas', ft('royal-tea', 'apple')),
  preset('green-tea-mango-ice-cream', 'Green Tea with Mango Ice Cream', 5.6, 'fruit-teas', ft('green-tea', 'none', { addon: 'mango-ice-cream' })),
  preset('yogurt-green-tea', 'Yogurt Green Tea', 5.6, 'fruit-teas', ft('green-tea', 'yogurt')),
  preset('lemon-bomb-green-tea', 'Lemon Bomb Green Tea', 5.6, 'fruit-teas', ft('green-tea', 'lemon')),
  preset('jadeite-lemon-tea', 'Jadeite Lemon Royal Tea', 5.6, 'fruit-teas', ft('royal-tea', 'lemon')),
  preset('elegant-lady-rose-tea', 'Elegant Lady Rose Tea', 5.6, 'fruit-teas', ft('black-tea', 'rose')),
  preset('guava-strawberry-burst-tea', 'Guava Strawberry Burst Tea', 5.6, 'fruit-teas', ft('green-tea', 'guava', { toppings: ['strawberry-pop'] })),
  preset('dragon-strawberry-yogurt-tea', 'Dragon Strawberry Yogurt Tea', 5.6, 'fruit-teas', ft('green-tea', 'strawberry')),
  preset('ruby-strawberry-lemon-tea', 'Ruby Strawberry Lemon Tea', 5.6, 'fruit-teas', ft('black-tea', 'strawberry')),
  preset('mango-pineapple-royal-tea', 'Mango Pineapple Royal Tea', 5.6, 'fruit-teas', ft('royal-tea', 'mango')),
  preset('mango-royal-tea', 'Mango Royal Tea', 5.6, 'fruit-teas', ft('royal-tea', 'mango')),
  preset('honey-peach-royal-tea', 'Honey Peach Royal Tea', 5.6, 'fruit-teas', ft('royal-tea', 'peach')),
  preset('grapefruit-royal-tea', 'Grapefruit Royal Tea', 5.6, 'fruit-teas', ft('royal-tea', 'grapefruit')),
  preset('mango-strawberry-bliss-tea', 'Mango Strawberry Bliss Tea', 5.6, 'fruit-teas', ft('royal-tea', 'mango', { toppings: ['strawberry-pop'] })),
  preset('passion-fruit-royal-tea', 'Passion Fruit Royal Tea', 5.6, 'fruit-teas', ft('royal-tea', 'passion-fruit')),
  preset('mango-royal-tea-topped-cream', 'Mango Royal Tea Topped Cream', 6.6, 'fruit-teas', ft('royal-tea', 'mango', { addon: 'sea-salt' })),
  // Smoothies $6.00
  preset('lemon-smoothie', 'Lemon Smoothie', 6, 'smoothies', sm('lemon')),
  preset('pina-colada-smoothie', 'Piña Colada Smoothie', 6, 'smoothies', sm('pineapple')),
  preset('strawberry-smoothie', 'Strawberry Smoothie', 6, 'smoothies', sm('strawberry')),
  preset('guava-strawberry-smoothie', 'Guava Strawberry Smoothie', 6, 'smoothies', sm('guava')),
  preset('grapefruit-lemonade-smoothie', 'Grapefruit Lemonade Smoothie', 6, 'smoothies', sm('grapefruit')),
  preset('guava-smoothie', 'Guava Smoothie', 6, 'smoothies', sm('guava')),
  preset('mango-strawberry-smoothie', 'Mango Strawberry Smoothie', 6, 'smoothies', sm('mango')),
  preset('strawberry-banana-smoothie', 'Strawberry Banana Smoothie', 6, 'smoothies', sm('strawberry')),
  preset('apple-smoothie', 'Apple Smoothie', 6, 'smoothies', sm('apple')),
  preset('honey-peach-smoothie', 'Honey Peach Smoothie', 6, 'smoothies', sm('peach')),
  preset('lychee-smoothie', 'Lychee Smoothie', 6, 'smoothies', sm('lychee')),
  preset('mango-smoothie', 'Mango Smoothie', 6, 'smoothies', sm('mango')),
  preset('passion-fruit-smoothie', 'Passion Fruit Smoothie', 6, 'smoothies', sm('passion-fruit')),
  preset('strawberry-lemonade-smoothie', 'Strawberry Lemonade Smoothie', 6, 'smoothies', sm('strawberry')),
  preset('strawberry-vanilla-yogurt-smoothie', 'Strawberry Vanilla Yogurt Smoothie', 6, 'smoothies', sm('strawberry')),
  // Milkshakes $6.00
  preset('caramel-milkshake', 'Caramel Milkshake', 6, 'milkshakes', ms('caramel')),
  preset('oreo-milkshake', 'Oreo Milkshake', 6, 'milkshakes', ms('oreo')),
  preset('coconut-milkshake', 'Coconut Milkshake', 6, 'milkshakes', ms('coconut')),
  preset('thai-tea-milkshake', 'Thai Tea Milkshake', 6, 'milkshakes', ms('thai')),
  preset('strawberry-banana-milkshake', 'Strawberry Banana Milkshake', 6, 'milkshakes', ms('strawberry')),
  preset('chocolate-milkshake', 'Chocolate Milkshake', 6, 'milkshakes', ms('chocolate')),
  preset('taro-milkshake', 'Taro Milkshake', 6, 'milkshakes', ms('taro')),
  preset('strawberry-milkshake', 'Strawberry Milkshake', 6, 'milkshakes', ms('strawberry')),
  preset('vietnamese-coffee-milkshake', 'Vietnamese Coffee Milkshake', 6, 'milkshakes', ms('none', { base: 'coffee' })),
  preset('red-bean-milkshake', 'Red Bean Milkshake', 6, 'milkshakes', ms('none', { toppings: ['red-bean'] })),
  preset('passion-fruit-milkshake', 'Passion Fruit Milkshake', 6, 'milkshakes', ms('passion-fruit')),
  preset('avocado-milkshake', 'Avocado Milkshake', 6.25, 'milkshakes', ms('avocado')),
  // Coffee
  preset('milk-vietnamese-coffee', 'Milk Vietnamese Coffee', 6, 'coffee', { base: 'coffee' }),
  preset('black-vietnamese-coffee', 'Black Vietnamese Coffee', 6, 'coffee', { base: 'coffee' }),
  preset('hot-milk-vietnamese-coffee', 'Hot Milk Vietnamese Coffee', 6, 'coffee', { base: 'coffee', finish: 'hot', ice: 'zero' }),
  preset('milk-vietnamese-coffee-sea-salt-cream', 'Vietnamese Coffee + Sea Salt Cream', 7, 'coffee', { base: 'coffee', addon: 'sea-salt' }),
  // Special beverages $5.20
  preset('winter-melon', 'Winter Melon', 5.2, 'specials', ft('special', 'winter-melon')),
  preset('honey-aloe', 'Honey Aloe', 5.2, 'specials', ft('special', 'honey', { toppings: ['aloe'] })),
  preset('winter-melon-lemon', 'Winter Melon Lemon', 5.2, 'specials', ft('special', 'lemon')),
  preset('honey-grass-jelly', 'Honey Grass Jelly', 5.2, 'specials', ft('special', 'honey', { toppings: ['grass-jelly'] })),
  preset('kumquat-lemon-tea', 'Kumquat Lemon', 5.2, 'specials', ft('green-tea', 'kumquat')),
  preset('kumquat-with-basil-seeds', 'Kumquat with Basil Seeds', 5.2, 'specials', ft('green-tea', 'kumquat', { toppings: ['basil-seeds'] })),
  preset('elegant-rose-aloe', 'Elegant Rose Aloe', 5.2, 'specials', ft('special', 'rose', { toppings: ['aloe'] })),
  preset('honey-green-tea', 'Honey Green Tea', 5.2, 'specials', ft('green-tea', 'honey')),
  // Topped cream
  preset('winter-melon-topped-cream', 'Winter Melon Topped Cream', 6.2, 'specials', ft('special', 'winter-melon', { addon: 'sea-salt' })),
  preset('black-tea-topped-cream', 'Black Tea Topped Cream', 5.5, 'specials', ft('black-tea', 'none', { addon: 'sea-salt' }))
];
