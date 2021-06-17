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
      - _component_type: image-gallery
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
url: /
_hide_content: true
_enabled_editors:
  - visual
---

