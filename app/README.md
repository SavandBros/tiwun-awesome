App[lication]
=============

Keeping the the code that will be distributed for production use. This is the actual place of the source code and where most of the times will be invested.


Directories
-----------

Each directory keeps specific content:

* **``fonts/``:** FontIcons files. If the files can be distributed or copied from ``bower_components`` then we should not keep the font icon files in this directory.
* **``images/``:** Any static images, such as logos or custom images.
* **``scripts/``:** Fun starts in this, the logic and JavaScript implementation.
* **``styles``:** Cascade Stylesheet files, can have zillion number of ``*.css`` file, but remember to add them to ``index.html`` file.
* **``templates/``:** HTML template files.
