window.navigation = window.navigation || {},
function(n) {
    navigation.menu = {
      constants: {
        sectionTemplate: '.section-template',
        contentContainer: '#wrapper',
        startSectionMenuItem: '#welcome-menu',
        startSection: '#welcome',
        dataSection: 'data-section'
      },

      importSectionsToDOM: function() {
        const links = document.querySelectorAll(`a[${navigation.menu.constants.dataSection}]`)
        var myMenu = this
        Array.prototype.forEach.call(links, function (link) {
         addImport("sections/" + link.getAttribute(navigation.menu.constants.dataSection) + ".html", null, null).then(function(importedSection) {
           let template = importedSection.querySelector(navigation.menu.constants.sectionTemplate)
           let clone = document.importNode(template.content, true)
           document.querySelector(navigation.menu.constants.contentContainer).appendChild(clone)
           if ("#" + link.getAttribute(navigation.menu.constants.dataSection) == navigation.menu.constants.startSection) {
            myMenu.showStartSection()
           }
          })
        })
      },
       
      setMenuOnClickEvent: function () {
        document.body.addEventListener('click', function (event) {
          if (event.target.dataset.section) {
            navigation.menu.hideAllSections()
            navigation.menu.showSection(event)
          }
        })
      },

      showSection: function(event) {
        const sectionId = event.target.dataset.section
        $('#' + sectionId).show()
        $('#' + sectionId + ' section').show()
      },

      showStartSection: function() {
        $(this.constants.startSectionMenuItem).click()
        $(this.constants.startSection).show()
        $(this.constants.startSection + ' section').show()
      },

      hideAllSections: function() {
        $(this.constants.contentContainer + ' section').hide()
      },

      init: function() {
        this.importSectionsToDOM()
        this.setMenuOnClickEvent()
      }
    };

    n(function() {
        navigation.menu.init()
    })

}(jQuery);
