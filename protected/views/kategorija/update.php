<?php
/* @var $this KategorijaController */
/* @var $model Kategorija */

$this->breadcrumbs=array(
	'Kategorijas'=>array('index'),
	$model->idKategorija=>array('view','id'=>$model->idKategorija),
	'Update',
);

$this->menu=array(
	array('label'=>'List Kategorija', 'url'=>array('index')),
	array('label'=>'Create Kategorija', 'url'=>array('create')),
	array('label'=>'View Kategorija', 'url'=>array('view', 'id'=>$model->idKategorija)),
	array('label'=>'Manage Kategorija', 'url'=>array('admin')),
);
?>

<h1>Update Kategorija <?php echo $model->idKategorija; ?></h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>