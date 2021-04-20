import mset

#create a window
mywindow = mset.UIWindow("Cull Back Faces")


#getselectedobjects()
#MeshObject cull back faces

#this function will be called when we click the button
def activateCullBackFaces():
    objs = mset.getSelectedObjects()
    for x in objs:
        x.cullBackFaces = True

def deactivateCullBackFaces():
    objs = mset.getSelectedObjects()
    for x in objs:
        x.cullBackFaces = False

def toggleCullBackFaces():
    print("toggle")
    objs = mset.getSelectedObjects()
    for x in objs:
        x.cullBackFaces = not x.cullBackFaces

def closePlugin():
    mset.shutdownPlugin()



   

#create a button, make it call doSomething when clicked
mybutton = mset.UIButton("Turn on")
mybutton.onClick = activateCullBackFaces

mybutton2 = mset.UIButton("Turn off")
mybutton2.onClick = deactivateCullBackFaces

mybutton3 = mset.UIButton("Toggle")
mybutton3.onClick = toggleCullBackFaces

mybutton4 = mset.UIButton("Exit Plugin")
mybutton4.onClick = closePlugin


#add the button to the window
mywindow.addElement( mybutton )
mywindow.addElement( mybutton2 )
mywindow.addElement( mybutton3 )
mywindow.addElement( mybutton4 )