/* kAIros. — Sanity client
   Utilise l'API CDN publique de Sanity (apicdn) avec CORS ouvert.
   ────────────────────────────────────────────────────────────── */

window.kairosSanity = (function () {
  'use strict'

  var SANITY = window.__SANITY_CONFIG__ || {}
  var projectId = SANITY.projectId || ''
  var dataset   = SANITY.dataset || 'production'
  var version   = 'v2023-08-01'

  function fetchUseCases() {
    var query = '*[_type == "useCaseCategory"] | order(order asc) { title, tag, tagColor, items[] { title, description, outcome } }'
    var url = 'https://' + projectId + '.apicdn.sanity.io/' + version + '/data/query/' + dataset + '?query=' + encodeURIComponent(query)

    return fetch(url).then(function (res) {
      if (!res.ok) throw new Error('Sanity fetch failed: ' + res.status)
      return res.json()
    }).then(function (json) {
      return json.result || []
    })
  }

  function renderUseCases(container, categories) {
    if (!container) return

    if (!categories || categories.length === 0) {
      container.innerHTML = '<p style="color:var(--gray-500);text-align:center;padding:48px 0;">Aucun cas d\'usage publié pour le moment.</p>'
      return
    }

    var tagClass = { fast: 'usecase-tag-fast', mid: 'usecase-tag-mid', long: 'usecase-tag-long' }
    var html = '<div class="usecases-grid">'

    for (var i = 0; i < categories.length; i++) {
      var cat = categories[i]
      var tc = tagClass[cat.tagColor] || 'usecase-tag-mid'
      html += '<div class="usecase-col">'
      html += '<div><span class="usecase-tag ' + tc + '">' + esc(cat.tag) + '</span><h3>' + esc(cat.title) + '</h3></div>'
      html += '<ul class="usecase-list" role="list">'

      var items = cat.items || []
      for (var j = 0; j < items.length; j++) {
        var item = items[j]
        html += '<li>'
        html += '<span class="marker marker-yes" aria-hidden="true">✦</span>'
        html += '<div>'
        html += '<strong>' + esc(item.title) + '</strong>'
        html += '<span>' + esc(item.description) + '</span>'
        html += '<span class="usecase-outcome">' + esc(item.outcome) + '</span>'
        html += '</div></li>'
      }

      html += '</ul></div>'
    }

    html += '</div>'
    container.innerHTML = html
  }

  function esc(str) {
    if (!str) return ''
    var div = document.createElement('div')
    div.textContent = str
    return div.innerHTML
  }

  return {
    fetchUseCases: fetchUseCases,
    renderUseCases: renderUseCases,
  }
})()
