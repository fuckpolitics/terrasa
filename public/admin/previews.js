/* Native Sveltia preview API. Preview components never save data. */
(() => {
  const { CMS } = window;
  if (!CMS) return;
  const h = CMS.React.createElement;
  const text = (value) => String(value || '').replace(/<br\s*\/?\s*>/gi, ' ').replace(/<[^>]*>/g, '');
  const asset = (getAsset, value) => value ? (getAsset(value)?.url || value) : '';
  const marked = (keyPath) => ({ 'data-key-path': keyPath, tabIndex: 0 });
  const heading = (kicker, title, subtitle) => h('header', { className: 'preview-heading' },
    h('span', { className: 'kicker' }, kicker), h('h1', {}, title), h('p', {}, subtitle));

  CMS.registerPreviewStyle('/admin/preview.css');
  CMS.registerPreviewTemplate('events', ({ entry, getAsset }) => {
    const data = entry.get('data').toJS();
    const card = (event, key, label) => h('article', { ...marked(key), key, className: 'event-preview' },
      h('div', { className: 'event-meta' }, h('span', { className: 'kicker' }, label),
        h('span', { className: `status ${event.show && event.title?.trim() ? 'visible' : ''}` }, event.show && event.title?.trim() ? 'Показывается' : 'Скрыто')),
      event.poster && h('img', { src: asset(getAsset, event.poster), alt: event.posterAlt || '', className: 'poster' }),
      h('div', { className: 'event-copy' }, h('small', {}, event.dateLabel || 'Период не указан'),
        h('h2', {}, text(event.title) || 'Ваше сезонное предложение'),
        h('p', {}, event.text || 'Добавьте заголовок и условия, затем включите показ.'),
        h('span', { className: 'preview-action' }, key === 'seasonal' ? 'Обсудить предложение ↗' : 'Забронировать стол ↗')));
    return h('main', { className: 'terrasa-preview' },
      heading('ТЕРРАСА / СОБЫТИЯ', 'Афиша ресторана', 'Проверьте фотографии, тексты и видимость перед сохранением.'),
      h('h2', { className: 'group-title' }, data.seasonalHeading), card(data.seasonal || {}, 'seasonal', 'Длительное предложение'),
      h('h2', { className: 'group-title' }, data.weeklyHeading),
      ...(data.weekly || []).map((event, i) => card(event, `weekly.${i}`, `Афиша ${i + 1}`)),
      !(data.weekly || []).length && h('p', { className: 'empty' }, 'Афиш пока нет. Добавьте мероприятие слева.'),
      h('h2', { className: 'group-title' }, 'Форматы банкетов'),
      ...(data.formats || []).map((format, i) => h('article', { ...marked(`formats.${i}`), key: i, className: 'format-preview' },
        h('small', {}, format.persons), h('h2', {}, format.title), h('p', {}, format.desc), h('strong', {}, format.price))),
      h('footer', { className: 'preview-note' }, 'Предпросмотр контента · скрытые блоки посетителям не показываются'));
  });

  CMS.registerPreviewTemplate('contacts', ({ entry, getAsset, widgetFor }) => {
    const data = entry.get('data').toJS();
    const labels = {hero:'Главный экран',about:'О ресторане · фон',aboutSide:'О ресторане · фото',menu:'Меню',atmosphere:'Атмосфера',chef:'Шеф-повар',events:'События',booking:'Бронирование',contacts:'Контакты'};
    const photo = (value, label, key) => h('figure', { ...marked(key), key, className: 'photo-preview' },
      value ? h('img', {src:asset(getAsset,value),alt:label}) : h('div', {className:'empty'}, 'Выберите фото'), h('figcaption', {}, label));
    return h('main', { className: 'terrasa-preview' },
      heading('ТЕРРАСА / САЙТ', 'Фотографии и атмосфера', 'Нажмите на фотографию, чтобы перейти к её полю.'),
      h('h2', {className:'group-title'}, 'Фотографии разделов'),
      h('div', {className:'photo-grid'}, ...Object.entries(labels).map(([key,label])=>photo(data.images?.[key],label,`images.${key}`))),
      h('h2', {className:'group-title'}, 'Интерьер и пространства'),
      h('div', {className:'photo-grid'}, ...(data.atmosphere?.tiles || []).map((tile,i)=>photo(tile.img,tile.title,`atmosphere.tiles.${i}.img`))),
      h('h2', {className:'group-title'}, 'Контакты и тексты'),
      ...['contacts','hero','about','atmosphere','chef','booking'].map(key=>h('section',{key,className:'text-preview'},widgetFor(key))));
  });
})();
