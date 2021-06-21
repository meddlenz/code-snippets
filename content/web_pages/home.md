---
title: Home
header:
  heading: Making Components With Hugo
  description: >-
    This is the description. Here you will learn how to make great components
    with Hugo
heading: Hugo
page_sections:
  - label:
    section_heading: Introduction
    components:
      - _component_type: all-posts
        heading: All Posts
      - _component_type: featured-posts
        heading: Featured Posts
      - _component_type: recent-posts
        heading: Recent Posts
      - _component_type: content-block
        label: Building a Hugo Website
        heading: Building a Hugo Website
        content_html: >-
          <p>Lorem <a target="_blank" rel="noopener" href="/page-2/">ipsum dolor
          </a>sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam,<em> quis nostrud </em>exercitation ullamco laboris nisi ut
          aliquip ex ea <strong>commodo consequat</strong>. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est
          laborum.</p><h4>Centered</h4><p>Lorem <a target="_blank"
          rel="noopener" href="/page-2/">ipsum dolor </a>sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam,<em> quis nostrud
          </em>exercitation ullamco laboris nisi ut aliquip ex ea
          <strong>commodo consequat</strong>. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est
          laborum.</p><h4>Right</h4><p>Lorem <a target="_blank" rel="noopener"
          href="/page-2/">ipsum dolor </a>sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam,<em> quis nostrud </em>exercitation ullamco
          laboris nisi ut aliquip ex ea <strong>commodo consequat</strong>. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.</p><h4>Justified</h4><p>Lorem <a target="_blank"
          rel="noopener" href="/page-2/">ipsum dolor </a>sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam,<em> quis nostrud
          </em>exercitation ullamco laboris nisi ut aliquip ex ea
          <strong>commodo consequat</strong>. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est
          laborum.</p><blockquote><p>Lorem <a target="_blank" rel="noopener"
          href="/page-2/">ipsum dolor </a>sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam,<em> quis nostrud </em>exercitation ullamco
          laboris nisi ut aliquip ex ea <strong>commodo
          consequat</strong>.</p></blockquote><table><caption>Caption</caption><thead><tr><th
          scope="col">Honk</th><th scope="col">Honk</th><th
          scope="col">Honk</th></tr></thead><tbody><tr><td>Excepteur
          sint</td><td>voluptate velit esse</td><td>sunt in
          culpa</td></tr><tr><td>dolore eu fugiat nulla pariatur</td><td>non
          proident</td><td>Ut enim ad minim veniam</td></tr><tr><td>consectetur
          adipiscing elit</td><td>fugiat nulla pariatur</td><td>Excepteur sint
          occaecat cupidatat</td></tr></tbody></table><pre
          data-language="liquid"><code class="language-liquid">{% for cat in
          cats %}
              &lt;h1&gt;Cat&lt;/h1&gt;
          {% endfor %}

          </code>

          </pre>
  - label:
    section_heading: Secondary
    components:
      - _component_type: Image Gallery
        label: Image Gallery
        heading: Image Gallery
        column_number: 3
        images:
          - image: https://picsum.photos/seed/picsum/200/300
            description_text: >-
              Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            url: https://google.com
          - image: https://picsum.photos/200/300?grayscale
            description_text: >-
              Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            url: https://google.com
          - image: https://picsum.photos/id/237/1200/650
            description_text: >-
              Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            url: https://google.com
          - image: https://picsum.photos/id/236/200/300
            description_text: >-
              Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            url: https://google.com
          - image: https://picsum.photos/id/235/200/300
            description_text: >-
              Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            url: https://google.com
          - image: https://picsum.photos/id/234/200/700
            description_text: >-
              Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            url: https://google.com
          - image: https://picsum.photos/id/233/200/300
            description_text: >-
              Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            url: https://google.com
          - image: https://picsum.photos/id/900/300
            description_text: >-
              Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
          - image: https://picsum.photos/1024/768.jpg
            description_text: >-
              Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            url: https://google.com
      - _component_type: Image Gallery
        label: Image Gallery
        heading: Image Gallery 2
        column_number: 3
        images:
          - image:
            description_text:
            url:
      - _component_type: Text Grid
        label: Text Grid
        heading: Text Grid
        grid_items:
          - heading:
            icon_image:
            content_html:
        icon_position:
      - _component_type: Content With Image
        label: Content With Image
        heading: Content With Image
        content_html:
        image_position: Left
        image:
      - _component_type: Call To Action
        label: Call To Action
        heading: Call To Action
        content_html:
        image_position: Left
        image:
        background_color:
      - _component_type: Divider
        label: Divider
        display_divider: true
      - _component_type: Links with Images
        label: Links with Images
        heading: Links with Images
        items:
          - title:
            image:
            button_label:
            button_variant:
            link_url:
            open_in_new_tab: false
            badges:
              - badge_image:
                badge_label:
      - _component_type: Questions and Answers
        label: Questions and Answers
        heading: Questions and Answers
        text_alignment:
        items:
          - question:
            answer_html:
      - _component_type: Big Numbered List
        label: Big Numbered List
        heading: Big Numbered List
        list_items:
          - item_text_html:
      - _component_type: Form
        label: Form
        heading: Form
        form_ID:
        send_to_address:
        success_page_url: /success/
        submit_button_label:
        submit_button_variant:
        form_components:
url: /
_hide_content: true
_enabled_editors:
  - visual
---

