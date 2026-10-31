 ▐▛███▛█   Claude Code v2.1.316
▝▜██████▀  deepseek-v4-pro · API Usage Billing
 ▝▝   ▝▝   ~/tthtlc.github.io


❯ update CLAUDE.md so that all the index pages, and _data/* pages and main page 
  are always updated if any of them are more than 1 day old.                    

  Thought for 4s (ctrl+o to expand)

● I'll first explore the repo to understand what "index pages", "_data/*", and
  "main page" refer to, so I can write an accurate convention.

  Thought for 41s, searched for 4 patterns, read 1 file, listed 3 directories, ran 4 shell commands (ctrl+o to expand)

● I have a clear picture now. Let me read the current CLAUDE.md to edit it
  precisely.

  Thought for 3s, read 1 file (ctrl+o to expand)

● Update(CLAUDE.md)
  ⎿  Added 26 lines
       1  # Project conventions
       2  
       3 +## Index, data, and home pages — freshness rule                
       4 +                                                               
       5 +The site's shell pages and data files must never sit more than 
         +1 day stale. Whenever you work in this repo,                   
       6 +check each file below and bring it up to date before finishing 
         +if its mtime is older than 1 day:                              
       7 +                                                               
       8 +```bash                                                        
       9 +find index*.html _data -type f -mtime +1                       
      10 +```                                                            
      11 +                                                               
      12 +**Files covered**                                              
      13 +- Main/home page: `index.html`                                 
      14 +- Index/shell pages: `index_all.html`, `index_gallery.html`, `i
         +ndex_search.html`, `index_spa.html`,                           
      15 +  `index_todo.html`, `index_discussion.html` (and the standalon
         +e utility `index_object_generator.html`,                       
      16 +  which is not driven by `_data`)                              
      17 +- `_data/*`: `visualizations.yml`, `visualization_categories.ym
         +l`, `recent_pages.yml`, `navigation.yml`                       
      18 +                                                               
      19 +**How to update each**                                         
      20 +- `_data/visualizations.yml` — the master list of every visuali
         +zation page. Reconcile it against the `.html`                  
      21 +  files actually on disk (add any new page, remove any deleted 
         +page, keep it alphabetically sorted).                          
      22 +- `_data/visualization_categories.yml` — regenerate: `python3 s
         +cripts/categorize_visualizations.py`.                          
      23 +- `_data/recent_pages.yml` — regenerate: `python3 scripts/gener
         +ate_recent_pages.py`.                                          
      24 +- `_data/navigation.yml` — review for stale or broken links.   
      25 +- Index/shell pages — these are Jekyll templates that read `sit
         +e.data.*` at build time, so keeping the data                   
      26 +  files fresh is what keeps them current; also verify the hand-
         +maintained `index_todo.html` list still points                 
      27 +  only at files that exist.                                    
      28 +                                                               
      29  ## Solo graphics content template
      30  
      31  For any **new or modified standalone interactive graphics page*
          * (a single canvas with controls), use

● I've updated CLAUDE.md with a new top-level convention. Here's what it adds:

  ## Index, data, and home pages — freshness rule

  - A one-line stale-file check: find index*.html _data -type f -mtime +1
  - The exact files covered:
    - Main/home page — index.html
    - Index/shell pages — index_all.html, index_gallery.html, index_search.html,
      index_spa.html, index_todo.html, index_discussion.html (plus
      index_object_generator.html noted as a standalone utility not driven by
      _data)
    - _data/* — visualizations.yml, visualization_categories.yml,
      recent_pages.yml, navigation.yml
  - How to update each stale file:
    - visualizations.yml → reconcile against files on disk (add/remove/keep
      alphabetical)
    - visualization_categories.yml → python3 
      scripts/categorize_visualizations.py
    - recent_pages.yml → python3 scripts/generate_recent_pages.py
    - navigation.yml → review for stale links
    - index pages → kept current by the data files (they read site.data.* at
      build time), plus verifying the hand-maintained index_todo.html list

  One thing worth flagging: the index pages themselves are Jekyll templates that
  render from site.data.* at build time, so their content is automatically
  fresh once the _data/* files are regenerated — the convention above reflects
  that, rather than suggesting a pointless touch on the templates. Let me know
  if you'd instead want a literal "touch the mtime" step for the index*.html
  files too, and I'll adjust.

✻ Churned for 1m 17s · done 1:05 AM