<?php
/* @var $this ObjekatHasKategorijaController */
/* @var $model ObjekatHasKategorija */

$this->breadcrumbs=array(
	'Objekat Has Kategorijas'=>array('index'),
	$model->Objekat_idObjekat=>array('view','id'=>$model->columnName),
	'Update',
);

$this->menu=array(
	array('label'=>'List ObjekatHasKategorija', 'url'=>array('index')),
	array('label'=>'Create ObjekatHasKategorija', 'url'=>array('create')),
	array('label'=>'View ObjekatHasKategorija', 'url'=>array('view', 'id'=>$model->columnName)),
	array('label'=>'Manage ObjekatHasKategorija', 'url'=>array('admin')),
);
?>

<h1>Update ObjekatHasKategorija <?php echo $model->columnName; ?></h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>