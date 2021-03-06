# How to publish

This text explains how to publish the kodeklubben/codeclub-viewer webpages.

## TL;DR (summary)
First, fork the `beta` repository, and clone it locally.

In the cloned `beta` folder, type
```
./publish.sh
```

To test before pushing, open another terminal window,
go to the subfolder `beta/codeclub-viewer/`, and type `yarn serve`.

If satisfied, type
```
git push
```
to publish the pages to your forked repository. The pages can then be viewed at
`https://<username>.github.io/beta`.

To publish this "for real", make a PR from the pushed gh-pages to
the "official" gh-pages.


## Long explanation
Before publishing the website to the branch `gh-pages` of this repo (`beta`),
make sure you have installed node and yarn. The easiest way is probably to install
[nvm](https://github.com/creationix/nvm#installation) first, then go to the
`codeclub-viewer` folder and type `nvm install`. This will install the version
specified by the file `.nvmrc`. Finally, install yarn as recommended on
[the yarn website](https://yarnpkg.com/lang/en/docs/install/).

If you just want to check that you have the correct version of node,
type `node -v` and compare it to the content of `.nvmrc`.

When this is in order, just type
```
./publish.sh
```

You will then have to specify whether you want you use a different branch than `master` for `codeclub-viewer` and
`oppgaver`.

You must also specify whether you want to add a url path prefix, which is necessary if the website isn't hosted
from the root, e.g. `beta` if you want the site to reside at `kodeklubben.github.io/beta/`.

The script will then delete any previous compiles, check out codeclub-viewer and oppgaver, compile the website,
and allow you to check the website locally. To test it, open up a second terminal, go into the folder
'codeclub-viewer', and run `yarn serve`. Go to http://localhost:8080/beta (or whatever you chose as your url path prefix)
in your browser and test until you are satisfied. If you are not satisfied, abort the script (ctrl-C),
make your changes and try again.

When you are happy with the result, let the script continue. It will then commit (only locally) the compiled website
to `master`, and then delete the old webpages and commit the new ones to `gh-pages`. It will also add an empty
`.nojekyll` file so that files and folders starting with underscore `_` are treated correctly, and the file
`google91a144a83c954edb.html` so that Google Search Console can verify that some of the admin servers are allowed
to reindex the site.

**Note that the pages are not published yet; in fact, so far all the changes have been made locally.**
This means that if you delete this repo locally, no harm has been done, and you can start over any time you like.

On the other hand, if everything went well, the pages look good, and you are sure you want to publish the pages
you just compiled, just type
```
git push
```
to publish the pages to your forked repository. The pages can then be viewed at
`https://<username>.github.io/beta`. Again it is smart to test that the pages work as they are supposed to.

When you are ready to publish the pages to https://oppgaver.kidsakoder.no/beta, make a
[pull request](https://github.com/kodeklubben/beta/pull/new/gh-pages) from the
gh-pages branch in your forked repository to the [gh-pages branch in the official
"kodeklubben" repository](https://github.com/kodeklubben/beta/tree/gh-pages).
When this PR is merged (preferably squashed and merged), the new pages are "officially"
released.
