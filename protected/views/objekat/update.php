<?php
/* @var $this ObjekatController */
/* @var $model Objekat */

$this->breadcrumbs=array(
	'Objekats'=>array('index'),
	$model->idObjekat=>array('view','id'=>$model->idObjekat),
	'Update',
);

$this->menu=array(
	array('label'=>'List Objekat', 'url'=>array('index')),
	array('label'=>'Create Objekat', 'url'=>array('create')),
	array('label'=>'View Objekat', 'url'=>array('view', 'id'=>$model->idObjekat)),
	array('label'=>'Manage Objekat', 'url'=>array('admin')),
);
?>

<h1>Update Objekat <?php echo $model->idObjekat; ?></h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>