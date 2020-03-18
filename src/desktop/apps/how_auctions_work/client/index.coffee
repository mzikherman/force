multiPageView = require '../../../components/multi_page/index.coffee'
{ openAuthModal } = require '../../authentication/helpers'
{ ModalType } = require "@artsy/reaction/dist/Components/Authentication/Types"

module.exports.init = ->
  view = multiPageView 'auction-faqs'
  view.collection.invoke 'fetch'
  ($faq = $('.js-multi-page-embed'))
    .html view.render().$el

  $('a[href*=#]:not(.avant-garde-button-black)').click (e) ->
    e.preventDefault()
    id = $(this).attr('href').replace '#', ''
    view.state.set 'active', id
    $('html, body')
      .animate { scrollTop: $faq.offset().top }, 'fast'

  $('.js-register-button').click (e) ->
    # TODO: remove dead code
    e.preventDefault()
    openAuthModal(ModalType.signup, {
      copy: 'Sign up to bid on artworks'
      intent: 'register to bid'
      destination: location.href
    })
