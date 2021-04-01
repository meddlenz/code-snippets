
# Code Snippets
A selectoin of handy snippets

## HTML
#### Social <meta> tags
```
<meta property="og:title" content="INSERT_CONTENT">
<meta property="og:description" content="INSERT_CONTENT">
<meta property="og:image" content="INSERT_IMAGE">
<meta property="og:url" content="INSERT_ABSOLUTE_URL">
<meta name="twitter:card" content="summary_large_image">

<!--  Non-Essential, But Recommended -->

<meta property="og:site_name" content="INSERT_CONTENT">
<meta name="twitter:image:alt" content="INSERT_CONTENT">
```

## CSS
## JS
dev.meddle.co.nz




{{ .Params.Test_html | markdownify }}  





    {{ $components := .Params.components }}
    {{ if isset .Params "page_sections" }}
        {{ range $section := .Params.page_sections }}
            <div class="page-section">
                {{ if isset $section "section_heading" }}
                        <h1>{{ $section.section_heading }}</h1>
                {{ end }}
                <div class="components">
                    {{ if isset $section "components" }}
                        {{ range $component := $section.components }}
                            {{ partial "components/content-block.html" . }}
                        {{ end }}
                    {{ end }}
                </div>
            </div>
        {{ end }}
    {{ end }}